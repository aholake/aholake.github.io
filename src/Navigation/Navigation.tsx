import { Grid, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import useStyles from './Navigation.styles';

const Navigation = () => {
  const classes = useStyles();
  const [nightMode, setNightMode] = useState(false);
  return (
    <Grid container className={classes.root} justify="center">
      <Grid
        container
        item
        md={8}
        xs={12}
        justify="space-between"
        alignItems="center"
        style={{ background: '#000' }}
      >
        <Typography variant="h5">Lộc Cộc</Typography>
        <IconButton onClick={() => setNightMode(!nightMode)}>
          {nightMode ? <Brightness2Icon style={{ color: '#FFF' }} /> : <Brightness5Icon style={{ color: '#FFF' }} />}

        </IconButton>
      </Grid>
    </Grid>
  );
};
export default Navigation;
