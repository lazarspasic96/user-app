import React from "react";
import Header from "./components/Header/Header";
import Main from "./containers/Main";
import { Paper, Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = (): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <Grid >
            <Header />
            <Main />
          </Grid>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default App;
