import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signup' component={SignupPage} />
    </Switch>
  );
};

export default App;
