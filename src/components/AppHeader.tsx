import {
  AppBar, IconButton, makeStyles, Toolbar, Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Logo from '@material-ui/icons/Style';
import { BACKGROUND } from '../common/AppColors';

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  appbar: {
    backgroundColor: BACKGROUND,
    color: '#000',
    boxShadow: 'none',
  },
});

const AppHeader = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" classes={{ root: classes.appbar }}>
      <Toolbar className={classes.toolbar}>
        <span>
          <Logo />
          AHOLAKE
        </span>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
