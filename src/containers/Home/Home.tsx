import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import http from "../../services/http";
import User from "../../models/User";
import Loader from "../../components/Header/Loader/Loader";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    http.get(`/users`).then((res) => {
      const results = res.data.map((user: object) => new User(user));
      setUsers(results);
      setLoading(false);
    });
  }, []);

  console.log(users);

  const useStyles = makeStyles((theme) => ({
    Home: {
      margin: "0 auto",
      width: "70%",
      height: "100%",
      padding: theme.spacing(6),
    },
    table: {
      minWidth: 650,
    },
    AddIcon: {
      position: "fixed",
      right: "35px",
      bottom: "30px",
    },
  }));

  const classes = useStyles();

  function createData(id: string, name: string, email: string, city: string) {
    return { id, name, email, city };
  }

  const rows = users.map((user: any) =>
    createData(user.id, user.name, user.email, user.city)
  );

  if (loading) {
    return <Loader loadingMessage={"Fetching user data..."} />;
  }

  return (
    <section className={classes.Home}>
      <Grid container direction="column" alignItems="center">
        <Typography align="center" color="primary" variant="h2">
          User App List
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">
                    <Link to={`/users/${row.id}`}>{row.name} </Link>
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.city}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to = '/add-user'>
          <Fab className={classes.AddIcon} color="primary">
            <AddIcon />
          </Fab>
        </Link>
      </Grid>
    </section>
  );
};

export default Home;
