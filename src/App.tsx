import React from 'react';
import {
  createMuiTheme, Grid, makeStyles, ThemeProvider,
} from '@material-ui/core';

import postData from './data/post.json';
import AppHeader from './components/AppHeader';
import AppColor from './common/AppColors';
import AppContent from './components/AppContent';
import Post from './components/Post/Post';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Segoe UI',
  },
  overrides: {
    MuiGrid: {
      root: {
        background: AppColor.background,
        color: '#000',
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: AppColor.background,
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={8} container direction="column">
          <AppHeader />
          <AppContent>
            {postData.map((post) => (
              <Post
                title={post.title}
                content={post.content}
                createdAt={new Date(post.createdAt)}
                createdBy={post.createdBy}
              />
            ))}
          </AppContent>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
