import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import User from "../../models/User";
import http from "../../services/http";

const UserPage = ({ match }: any) => {
  const [user, setUser] = useState();

  const id = match.params.id;
  useEffect(() => {
    http.get(`/users/${id}`).then(res => {
        setUser(new User(res.data))
    }
    )
  }, [id]);

  console.log(user, 'singleUser')
  return (
    <Grid>
      <Typography>Single User</Typography>
    </Grid>
  );
};

export default UserPage;
