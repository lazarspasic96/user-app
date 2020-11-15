import React from "react";
import { CircularProgress } from "@material-ui/core";
import {makeStyles} from '@material-ui/core'

const Loader = (props) => {

    const useStyles = makeStyles((theme) => ({
        loader: {
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: "column",
         width: '100%',
         height: '100vh'
        }
      }));
    
      const classes = useStyles();
  return (
    <div className = {classes.loader}>
      <CircularProgress className = {classes.loader} disableShrink />
      <p style = {{textAlign: 'center'}}>{props.loadingMessage}</p>
    </div>
  );
};

export default Loader;
