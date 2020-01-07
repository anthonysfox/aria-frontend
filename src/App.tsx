import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import AuthForm from "./components/auth/AuthForm";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={AuthForm} />
    </Switch>
  );
};

export default App;
