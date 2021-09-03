import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import AppRouter from './AppRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
