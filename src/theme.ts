import { createMuiTheme } from '@material-ui/core';

const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

const theme = createMuiTheme({
  typography: {
    fontFamily,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: 0,
          color: '#FFF',
          fontFamily,
        },
      },
    },
  },
  palette: {
    background: {
      default: '#121212',
    },
  },
});

export default theme;
