import React, { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./containers/Main";
import { Paper, Grid, Theme, Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const App = (): JSX.Element => {
  const themeColor = useSelector((state) => {
    return state.theme.defaultTheme;
  });

  const theme = createMuiTheme({
    palette: {
      type: themeColor,
    },
  });


  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
        <Paper variant = 'elevation' style={{ height: '100%', boxShadow: 'none' }}>
          <Grid style={{ height: "100%" }} container direction="column">
            <Header />
            <Main />
          </Grid>
        </Paper>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
