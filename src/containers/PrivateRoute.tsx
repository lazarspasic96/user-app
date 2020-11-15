import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import User from "./UserPage/UserPage";

const PrivateRoute = () => {
  return (
    <Switch>
      <Route exact path="/:id" component={User} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default PrivateRoute;
