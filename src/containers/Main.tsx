import React, { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Auth from "./Auth/Auth";
import PrivateRoute from "./PrivateRoute";
import { connect, useDispatch } from "react-redux";
import * as action from "../store/actions/index";

const Main: React.FC = (props) => {
  const user = localStorage.getItem("user");

  const dispatch = useDispatch();
  const handleLogin = () => dispatch(action.loginHandler());
  let history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
      return JSON.parse(user).isAuth ? handleLogin() : null;
    }
  });

  let routes = (
    <Switch>
      <Route exact path="/login" component={Auth} />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );

  if (props.isAuth) {
    routes = <PrivateRoute />;
  }

  return routes;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(Main);
