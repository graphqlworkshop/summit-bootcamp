import { useState } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri: `https://www.graphql.fun/graphql` });
const wsClient = new SubscriptionClient(`wss://www.graphql.fun/graphql`, {
  reconnect: true
});
const wsLink = new WebSocketLink(wsClient);
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export const useConnectionStatus = () => {
  const [status, setStatus] = useState("connecting");
  wsClient.onConnecting(() => {
    setStatus("connecting");
  });

  wsClient.onConnected(() => {
    setStatus("connected");
  });

  wsClient.onReconnecting(() => {
    setStatus("connecting");
  });

  wsClient.onReconnected(() => {
    setStatus("connected");
  });

  wsClient.onDisconnected(() => {
    setStatus("disconnected");
  });

  return status;
};

export default new ApolloClient({ cache, link });
