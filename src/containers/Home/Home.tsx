import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import http from "../../services/http";
import User from "../../models/User";

const Home: React.FC<{}> = ({}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    http.get(`/users`).then((res) => {
      const results = res.data.map((user: object) => new User(user));
      setUsers(results)
      setLoading(false)
    })

  }, []);

  console.log(users)

  const useStyles = makeStyles((theme) => ({
    Home: {
      margin: "0 auto",
      width: "70%",
      height: "100vh",
    },
    table: {
      minWidth: 650,
    },
  }));

  const classes = useStyles();

  function createData(
    id: string,
    name: string,
    email: string,
    city: string,
  ) {
    return { id, name, email, city};
  }
/* 
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ]; */


  const rows = users.map(user => createData(user.id, user.name, user.email, user.city))

  if(loading) {
      return <p>Loading....</p>
  }


  return (
    <section className={classes.Home}>
      <Grid container direction="column" alignItems="center">
        <Typography>User App List</Typography>

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
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.city}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </section>
  );
};

export default Home;
