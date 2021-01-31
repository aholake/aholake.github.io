import React from 'react';
import {
  createMuiTheme, Grid, makeStyles, ThemeProvider,
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppColor from './common/AppColors';
import AppContent from './components/AppContent';
import PostDetail from './pages/PostDetail';
import Home from './pages/Home';
import TagPage from './pages/TagPage';

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
      <Router>
        <Grid container justify="center" className={classes.root}>
          <Grid item xs={12} md={8} container direction="column">
            <AppHeader />
            <AppContent>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/post/:postId" exact>
                  <PostDetail />
                </Route>
                <Route path="/tag/:tagName" exact>
                  <TagPage />
                </Route>
              </Switch>
            </AppContent>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
