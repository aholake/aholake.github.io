import { useHistory } from 'react-router-dom';
import {
  Box, Chip, Paper, Typography,
} from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import useStyles from './Post.styles';
import { PostModel } from './model/PostModel';

interface PropsType {
  post: PostModel
}

const PostEntry = ({
  post: {
    id, tags, description, title, createdBy, createdAt,
  },
}: PropsType) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`/post/${id}`);
  };
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.clickableTitle} onClick={onClick}>
        {title}
      </Typography>
      <Typography variant="caption">{`${moment(createdAt).fromNow()} by ${createdBy}`}</Typography>

      <Box className={classes.content}>
        <Typography>{description}</Typography>
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

export default PostEntry;
