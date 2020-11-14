import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Main from "./containers/Main";
import { Paper, Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ThemeContext } from "./context/theme-context";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const App = (): JSX.Element => {
  
const toggleTheme = useContext(ThemeContext);

console.log(toggleTheme.theme, 'aloo')



console.log(toggleTheme)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <Grid container direction="column">
            <Header />
            <Main />
          </Grid>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default App;
