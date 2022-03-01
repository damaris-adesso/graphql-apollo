import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { HttpLink } from "@apollo/client";

const restLink = new RestLink({
  endpoints: {
    openExchangeRate: "https://open.exchangerate-api.com/v6/",
  },
});

// the code sample connects to a simple sandbox graphQL endpoint that provides currency rate data
const httpLink = new HttpLink({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([restLink, httpLink]),
});
