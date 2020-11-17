import React, { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Auth from "./Auth/Auth";
import PrivateRoute from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../store/actions/index";

const Main: React.FC = () => {
  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });


  const dispatch = useDispatch();
  const handleLogin = () => dispatch(action.loginHandler());
  let history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      history.push("/");
      return JSON.parse(user).isAuth ? handleLogin() : null;
    }
  }, []);

  let routes: any;

  if (isAuth) {
    routes = <PrivateRoute />;
  }

  else {
   routes = <Switch>
      <Route exact path="/login" component={Auth} />
      <Redirect to = '/login' />
    </Switch>
  }

  return routes;
};

export default Main;
