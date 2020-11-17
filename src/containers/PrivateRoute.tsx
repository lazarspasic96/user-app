import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import AddUser from "./UserPage/AddUser/AddUser";
import User from "./UserPage/UserPage";

const PrivateRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users/:id" component={User} /> 
      <Route exact path="/add-user" component={AddUser} />
    </Switch>
  );
};

export default PrivateRoute;
