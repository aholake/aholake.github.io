import React from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';
import Post from '../Post/Post';
import DisplayMode from '../Post/DisplayMode';

interface PropsType {
  posts: Record<string, any>[]
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
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          createdAt={new Date(post.createdAt)}
          createdBy={post.createdBy}
          description={post.description}
          displayMode={DisplayMode.SUMMARY}
          tags={post.tags}
        />
      ))}
    </Box>
  );
};

export default PostList;
