const { ApolloServer, gql } = require("apollo-server");
const { RedisPubSub } = require("graphql-redis-subscriptions");
const Redis = require("ioredis");

let _message = "";
const pubsub = new RedisPubSub({
  publisher: new Redis("redis://127.0.0.1:6379"),
  subscriber: new Redis("redis://127.0.0.1:6379")
});

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
