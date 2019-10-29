const { ApolloServer, gql, PubSub } = require("apollo-server");

let card = ["king", "queen", "jack", "ace"];
let pubsub = new PubSub();

const typeDefs = gql`
  type Query {
    message: String
  }

  type Mutation {
    alert(message: String): String
  }

  type Subscription {
    message: String
  }
`;

const resolvers = {
  Query: {
    message: () => _message
  },
  Mutation: {
    alert: (_, { message }) => {
      _message = message;
      pubsub.publish("newAlert", { message: _message });
      return _message;
    }
  },
  Subscription: {
    message: {
      resolve: (payload, args, context, info) => {
        const rand = Math.floor(Math.random() * card.length);
        const [yourCard] = card.splice(rand, 1);
        return yourCard;
      },
      subscribe: () => pubsub.asyncIterator("newAlert")
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(url));
