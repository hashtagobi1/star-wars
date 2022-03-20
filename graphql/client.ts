import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client";

export const client = new ApolloClient({
    // The GQL Server
  uri: "http://localhost:55140/",
  cache: new InMemoryCache(),
});

