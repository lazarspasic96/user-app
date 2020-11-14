import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import classes from "*.module.css";

interface Props {
  onSubmit: () => void;
}

const useStyles = makeStyles({
  authPage: {
    margin: "0 auto",
    width: '80%',
    height: '100vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid red",
  },
});

const Auth: React.FC<Props> = () => {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

  return (
    <section className={classes.authPage}>
      <form className={""} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={""}
        >
          Sign In
        </Button>
      </form>
    </section>
  );
};

export default Auth;
