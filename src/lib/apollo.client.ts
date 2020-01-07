import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

import { PrimaryUtils } from "../shared/utils/primary.utils";

function createClient(): ApolloClient<any> {
  const ariaLink = new HttpLink({
    uri: PrimaryUtils.graphqlUrl,
    headers: {}
  });

  const client = new ApolloClient({
    link: ariaLink,
    cache: new InMemoryCache()
  });

  return client;
}

export default createClient;
