import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-boost";
import { Store } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import "../css/tailwind.css";

import withData from "../lib/withData";
import Page from "../components/primary/Page";
import assembleStore from "../store/assembleStore";

interface MyAppProps {
  Component: React.ComponentClass | React.FunctionComponent;
  apollo: ApolloClient<any>;
  pageProps: any;
  store: Store;
}

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps: { query?: any } = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // This exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps, store } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Provider store={store}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default withRedux(assembleStore)(withData(MyApp));
