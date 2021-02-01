import {
  Box, Chip, Paper, Typography,
} from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './Post.styles';
import { PostModel } from './model/PostModel';
import 'github-markdown-css';
import Markdown from '../common/Markdown';

interface PropsType {
  post: PostModel;
}
const PostDetail = ({ post }: PropsType) => {
  const {
    title, content, tags, createdAt, createdBy,
  } = post;
  const history = useHistory();
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5">
        {title}
      </Typography>
      <Typography variant="caption">{`${moment(createdAt).fromNow()} by ${createdBy}`}</Typography>

      <Box className={classes.content}>
        <Markdown>
          {content}
        </Markdown>
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

export default PostDetail;
