import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import * as action from "../../store/actions/index";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Auth = ({ history }: any) => {
  const useStyles = makeStyles((theme) => ({
    authPage: {
      margin: "0 auto",
      width: "100%",
      height: "100vh",
    },
    errorMeassage: {
      color: "red",
      fontSize: "16px",
    },
    avatar: {
      margin: "auto",
      padding: "9px",
      backgroundColor: theme.palette.secondary.main,
    },
    loginText: {
      textAlign: "center",
      padding: '18px'
    },
  }));
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleLogin = () => dispatch(action.loginHandler());

  type FormValues = {
    email: string;
  };

  const { register, handleSubmit, errors } = useForm<FormValues>();

  const [error, setError] = useState("");

  const onSubmit = (data) => {
    const user = localStorage.getItem("user");

    if (user) {
      if (JSON.parse(user).email === data.email) {
        handleLogin();
        history.push("/");
      } else {
        setError("User with that email does not exist.");
      }
    } else {
      const userData = JSON.stringify({ email: data.email, isAuth: true });
      handleLogin();
      localStorage.setItem("user", userData);
      history.push("/");
    }
  };

  return (
    <Grid
      className={classes.authPage}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <section style={{ width: "30%" }}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.loginText}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register({
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
            })}
            error={Boolean(errors.email)}
            helperText={errors.email ? "Please enter valid email" : ""}
          />
          <p className={classes.errorMeassage}>{error}</p>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
        </form>
      </section>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(Auth);
