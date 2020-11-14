import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./Auth/Auth";


const Main: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Auth} />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
};

export default Main;
