import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

import { PrimaryUtils } from "../shared/utils/primary.utils";

function createClient(serverData: any): ApolloClient<any> {
  const ariaLink = new HttpLink({
    uri: PrimaryUtils.graphqlUrl,
    headers: {}
  });

  return new ApolloClient({
    link: ariaLink,
    cache: new InMemoryCache()
  });
}

export default withApollo(createClient);
