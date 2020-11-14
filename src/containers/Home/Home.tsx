import React, {useState, useEffect} from "react";
import { Grid, Typography } from "@material-ui/core";


const Home: React.FC<{}> = ({}) => {

    useEffect(()=> {

    },[])
  return <section>
      <Grid container direction = 'column' alignItems ='center'>
          <Typography>
              User App List
          </Typography>

      </Grid>
  </section>
};

export default Home;
