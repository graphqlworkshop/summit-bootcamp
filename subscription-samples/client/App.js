import React from "react";
import { useConnectionStatus } from "./client";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import PieChart from "react-minimal-pie-chart";

const QUERY = gql`
  query {
    callout {
      ... on AudiencePoll {
        results {
          question
          yesLabel
          noLabel
          yes
          no
        }
      }
    }
  }
`;

const SUBSCRIPTION = gql`
  subscription {
    callout {
      ... on AudiencePoll {
        results {
          question
          yesLabel
          noLabel
          yes
          no
        }
      }
    }
  }
`;

export default function App() {
  const status = useConnectionStatus();
  const { loading, data } = useQuery(QUERY);
  const { data: pushData } = useSubscription(SUBSCRIPTION);

  if (loading) return loading;
  if (!data.callout) return <h1>Waiting for question</h1>;

  const results = pushData ? pushData.callout.results : data.callout.results;

  return (
    <>
      <h1>{results.question}</h1>
      <p>{status}</p>
      <PieChart
        radius={30}
        data={[
          { value: results.yes, color: "green" },
          { value: results.no, color: "red" }
        ]}
      />
    </>
  );
}
