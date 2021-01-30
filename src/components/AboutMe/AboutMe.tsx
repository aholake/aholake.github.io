import React from 'react';
import {
  Grid,
  makeStyles, Paper,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  avatar: {
    borderRadius: '50%',
    width: 150,
  },
  entry: {
    marginTop: 20,
  },
});

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Grid container style={{ padding: 10 }}>
        <Grid item container xs={12} justify="center">
          <img src="/images/avatar.jpg" alt="My avatar" className={classes.avatar} />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.entry}>
            <Typography variant="h4">About me</Typography>
            <Typography variant="body1">
              Hi!! My name is Loc Vo - 27 years old.
              Currently, I am working as a software engineer.
              I always have full of passion to work in this area.
              This blog is created for writing some crazy things about my life
              and sharing what I did learn around myself.
            </Typography>
          </div>
          <div className={classes.entry}>
            <Typography variant="h4">Follow me</Typography>
            <Typography variant="body1">
              Some links to my connections.
            </Typography>
          </div>
          <div className={classes.entry}>
            <Typography variant="h4">Instagram</Typography>
            <Typography variant="body1">
              Some links to my connections.
            </Typography>
          </div>
          <div className={classes.entry}>
            <Typography variant="h4">Tags</Typography>
            <Typography variant="body1">
              Some links to my connections.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default AboutMe;
