import React from 'react';
import './App.css';
import {createMuiTheme, Grid} from "@material-ui/core";
import AppHeader from "./components/AppHeader";
import { ThemeProvider } from '@material-ui/core';
import {BACKGROUND} from "./common/AppColors";

const theme = createMuiTheme({
  overrides: {
    MuiGrid: {
      root: {
        background: BACKGROUND,
        color: '#000'
      }
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justify={"center"}>
        <Grid item xs={8} container>
          <AppHeader />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
