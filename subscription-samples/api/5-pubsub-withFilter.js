const { ApolloServer, gql, PubSub, withFilter } = require("apollo-server");

let _message = "";
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
      subscribe: withFilter(
        () => pubsub.asyncIterator("newAlert"),
        (payload, variables, context) => {
          return context.color === "red";
        }
      )
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req, connection }) {
    if (connection) {
      console.log(connection.context.color);
      return {
        color: connection.context.color
      };
    }
  }
});

server.listen().then(({ url }) => console.log(url));
