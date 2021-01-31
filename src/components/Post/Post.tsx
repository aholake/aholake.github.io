import React from 'react';
import {
  Box, Chip, makeStyles, Paper, Typography,
} from '@material-ui/core';
import moment from 'moment';
// @ts-ignore
import ReactHtmlParser from 'react-html-parser';
import DisplayMode from './DisplayMode';

const useStyles = makeStyles({
  '@global': {
    p: {
      fontFamily: 'Segoe UI',
    },
  },
  root: {
    padding: 10,
    marginBottom: 10,
  },
  content: {
    marginTop: 5,
  },
  footer: {
    marginTop: 5,
  },
  chip: {
    cursor: 'pointer',
    margin: '0 2px',
  },
});

interface PropsType {
  title: string;
  content: string;
  description: string;
  createdAt: Date;
  createdBy: string;
  displayMode: DisplayMode;
  tags: string[]
}
const Post = (props: PropsType) => {
  const {
    title, description, createdAt, createdBy, content, displayMode, tags,
  } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="caption">{`${moment(createdAt).fromNow()} by ${createdBy}`}</Typography>

      <Box className={classes.content}>
        {displayMode === DisplayMode.SUMMARY && (
          <Typography>{description}</Typography>
        )}
        {displayMode === DisplayMode.DETAIL && ReactHtmlParser(content)}
      </Box>

      <Box className={classes.footer}>
        {tags.map((tag) => (
          <Chip
            label={tag}
            classes={{
              root: classes.chip,
            }}
          />
        ))}
      </Box>
    </Paper>
  );
};

export default Post;
