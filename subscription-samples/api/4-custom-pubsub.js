const { ApolloServer, gql } = require("apollo-server");
const MyPubSub = require("./myPubSub");
let _message = "";
let pubsub = new MyPubSub();

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
      subscribe: () => pubsub.asyncIterator("newAlert")
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(url));
