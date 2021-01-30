import React from 'react';
import './App.css';
import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';

import AppHeader from './components/AppHeader';
import AppColor from './common/AppColors';

const theme = createMuiTheme({
  overrides: {
    MuiGrid: {
      root: {
        background: AppColor.background,
        color: '#000',
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center">
        <Grid item xs={8} container>
          <AppHeader />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
