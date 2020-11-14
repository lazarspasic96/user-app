import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions/index";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
  })
);

export default function Header() {
  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });

  const classes = useStyles();

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  const dispatch = useDispatch();
  const themeHandler = (theme) => dispatch(action.themeHandler(theme));
  const logOutHandler = () => dispatch(action.logOutHandler())

  useEffect(() => {
    themeHandler(theme);
  }, [theme]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            UserApp
          </Typography>
          <Switch color="secondary" onChange={() => toggleTheme()} />

          {isAuth ? <Button onClick = {logOutHandler} color="inherit">Logout</Button> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
