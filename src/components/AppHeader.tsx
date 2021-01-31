import {
  AppBar, IconButton, makeStyles, Theme, Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AppColor from '../common/AppColors';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  appbar: {
    backgroundColor: AppColor.background,
    color: '#000',
    boxShadow: 'none',
    [theme.breakpoints.up('md')]: {
      marginBottom: 45,
    },
  },
  logo: {
    color: 'initial',
    textDecorate: 'none',
  },
}));

const AppHeader = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" classes={{ root: classes.appbar }}>
      <Toolbar className={classes.toolbar}>
        <Link to="/" className={classes.logo}>
          <HomeIcon />
        </Link>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
