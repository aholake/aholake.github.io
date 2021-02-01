import React from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';
import PostEntry from '../Post/PostEntry';
import { PostModel } from '../Post/model/PostModel';

interface PropsType {
  posts: PostModel[];
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 110px)',
      overflow: 'auto',
    },
  },
}));

const PostList = ({ posts }: PropsType) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {posts.map((post: PostModel) => (
        <PostEntry post={post} />
      ))}
    </Box>
  );
};

export default PostList;
