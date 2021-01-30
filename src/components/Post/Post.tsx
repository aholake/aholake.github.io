import React from 'react';
import {
  Box, makeStyles, Paper, Typography,
} from '@material-ui/core';
import moment from 'moment';
// @ts-ignore
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles({
  '@global': {
    p: {
      fontFamily: 'Segoe UI',
    },
  },
  root: {
    padding: 10,
  },
  content: {
    marginTop: 5,
  },
});

interface PropsType {
  title: string;
  content: string;
  createdAt: Date;
  createdBy: string;
}
const Post = (props: PropsType) => {
  const {
    title, content, createdAt, createdBy,
  } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="caption">{`${moment(createdAt).fromNow()} by ${createdBy}`}</Typography>

      <Box className={classes.content}>
        {ReactHtmlParser(content)}
      </Box>
    </Paper>
  );
};

export default Post;
