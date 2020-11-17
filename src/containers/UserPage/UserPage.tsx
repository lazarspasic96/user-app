import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import User from "../../models/User";
import http from "../../services/http";

const UserPage = ({ match }: any) => {
  const [user, setUser] = useState();


  useEffect(() => {
    const id = match.params.id;
    http.get(`/users/${id}`).then(res => {
        setUser(new User(res.data))
    }
    )
  }, []);

  console.log(user, 'singleUser')
  return (
    <Grid style ={{height: '100vh'}}>
   <Typography>This shoud be a single user page</Typography>
    </Grid>
  );
};

export default UserPage;
