const { ApolloServer, gql } = require("apollo-server");
const { AMQPPubSub } = require("graphql-amqp-subscriptions");
const amqp = require("amqplib");

(async () => {
  const connection = await amqp.connect(
    "amqp://guest:guest@localhost:5672?heartbeat=30"
  );

  let _message = "";
  const pubsub = new AMQPPubSub({ connection });

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
})();
