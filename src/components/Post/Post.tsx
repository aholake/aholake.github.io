import React from 'react';
import {
  Box, makeStyles, Paper, Typography,
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
});

interface PropsType {
  title: string;
  content: string;
  description: string;
  createdAt: Date;
  createdBy: string;
  displayMode: DisplayMode;
}
const Post = (props: PropsType) => {
  const {
    title, description, createdAt, createdBy, content, displayMode,
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
    </Paper>
  );
};

export default Post;
