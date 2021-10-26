import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../pages/About";
//import Home from "../pages/Home";
import Login from "../pages/Login";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/about" component={About} />
      <Redirect to="/404" />
    </Switch>
  );
};
