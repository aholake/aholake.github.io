import React from 'react';
import {
  createMuiTheme, Grid, makeStyles, ThemeProvider,
} from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import AppColor from './common/AppColors';
import theme from './theme';

const useStyles = makeStyles((theme) => ({
  root: {
    background: AppColor.background,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container justify="center" className={classes.root}>
          <Grid item xs={12} md={8} container direction="column" />
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
