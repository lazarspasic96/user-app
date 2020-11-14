import React, { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./containers/Main";
import { Paper, Grid, Theme } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import classes from "*.module.css";




const App = (props): JSX.Element => {

 const themeColor = props.theme
  
const theme = createMuiTheme({
  palette: {
    type: themeColor
  },
});



console.log(props.theme)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper style = {{height: '100vh'}}>
          <Grid container direction="column">
            <Header />
            <Main />
          </Grid>
        </Paper>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.theme.defaultTheme
  }
}
export default connect(mapStateToProps, null)(App);
