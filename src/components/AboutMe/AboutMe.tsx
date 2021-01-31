import React from 'react';
import {
  Chip,
  Grid,
  makeStyles, Paper,
  Typography,
} from '@material-ui/core';
import _flatten from 'lodash/flatten';
import _uniq from 'lodash/uniq';
import { useHistory } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import posts from '../../data/post.json';

const useStyles = makeStyles({
  avatar: {
    borderRadius: '50%',
    width: 150,
  },
  entry: {
    marginTop: 20,
  },
  chip: {
    margin: '2px',
  },
});

const AboutMe = () => {
  const classes = useStyles();
  const tags: string[] = _uniq(_flatten(posts.map((p) => p.tags)));
  const history = useHistory();
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
            <span>
              <a href="https://fb.com/aholake">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com/aholake">
                <LinkedInIcon />
              </a>
            </span>
          </div>
          <div className={classes.entry}>
            <Typography variant="h4">Instagram</Typography>
            <Typography variant="body1">
              Some links to my connections.
            </Typography>
          </div>
          <div className={classes.entry}>
            <Typography variant="h4">Tags</Typography>
            {tags.map((tagName) => (
              <Chip
                key={tagName}
                className={classes.chip}
                label={tagName}
                onClick={() => history.push(`/tag/${tagName}`)}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default AboutMe;
