import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ApolloProvider } from "@apollo/react-hooks";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import assembleStore from "./store/assembleStore";
import history from "./store/history/browser.history";
import createClient from "./lib/apollo.client";

const ariaStore = assembleStore();

ReactDOM.render(
  <Provider store={ariaStore}>
    <ConnectedRouter history={history}>
      <ApolloProvider client={createClient()}>
        <App />
      </ApolloProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
