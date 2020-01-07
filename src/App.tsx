import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import AuthForm from "./components/auth/AuthForm";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={AuthForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
