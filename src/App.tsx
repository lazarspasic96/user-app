import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./containers/Auth/Auth";

const App = (): JSX.Element => {

  return <>

<Switch>
  <Route exact path = '/login' component = {Auth} />
  <Redirect exact from="/" to="/login" />
</Switch>
  

  </>;
};

export default App;
