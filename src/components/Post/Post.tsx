import React from 'react';
import {
  Box, Chip, Paper, Typography,
} from '@material-ui/core';
import moment from 'moment';
// @ts-ignore
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import DisplayMode from './DisplayMode';
import useStyles from './Post.styles';

interface PropsType {
  id: number;
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
    id,
    title,
    description,
    createdAt,
    createdBy,
    content,
    displayMode,
    tags,
  } = props;
  const classes = useStyles();
  const history = useHistory();
  const onClick = () => {
    if (displayMode === DisplayMode.DETAIL) {
      return;
    }
    history.push(`/post/${id}`);
  };
  return (
    <Paper className={classes.root}>
      <Typography
        variant="h4"
        onClick={onClick}
        className={clsx(displayMode === DisplayMode.SUMMARY && classes.clickableTitle)}
      >
        {title}
      </Typography>
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
            key={tag}
            label={tag}
            onClick={() => history.push(`/tag/${tag}`)}
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
