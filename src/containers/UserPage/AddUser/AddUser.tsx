import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const AddUser = (props) => {
  const useStyles = makeStyles({
    addNewUserContainer: {
      width: "100%",
      height: "100vh",
    },
    addUserForm: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      width: "50%",
      marginTop: '-380px'
    },
    input: {
      margin: "10px",
      width: "200px",
    },
    addUserHeading: {
      padding: "20px 10px",
      marginTop: '50px'
    },
    addBtn: {
        alignSelf: 'center',
        margin: '0 auto',
        width: '50%',
        marginTop: '20px'
    }
  });

  const classes = useStyles();

  return (
    <section>
      <Typography
        className={classes.addUserHeading}
        align="center"
        variant="h3"
        color="primary"
      >
        Add new user
      </Typography>
      <Grid
        className={classes.addNewUserContainer}
        container
        flex-direction = 'column'
        justify="center"
        alignItems="center"
      >
        <form className={classes.addUserForm}>
          <TextField
            className={classes.input}
            variant="outlined"
            required
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            label="E-mail"
            size="small"
          />
          <TextField
            className={classes.input}
            variant="outlined"
            required
            id="city"
            name="city"
            autoFocus
            label="City"
            size="small"
          />
          <TextField
            className={classes.input}
            variant="outlined"
            required
            id="first-name"
            name="first-name"
            autoFocus
            label="First name"
            size="small"
          />
          <TextField
            className={classes.input}
            variant="outlined"
            required
            id="last-name"
            name="last-name"
            autoFocus
            label="Last name"
            size="small"
          />
          <Button type = 'submit' color="primary" variant ='contained' className ={classes.addBtn}>
            Add User
          </Button>
        </form>
      </Grid>
    </section>
  );
};

export default AddUser;
