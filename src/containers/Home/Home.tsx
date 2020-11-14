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
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <section className={classes.Home}>
      <Grid container direction="column" alignItems="center">
        <Typography>User App List</Typography>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Username&nbsp;(g)</TableCell>
                <TableCell align="right">Email&nbsp;(g)</TableCell>
                <TableCell align="right">City&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
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
