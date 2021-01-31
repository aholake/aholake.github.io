import React from 'react';
import { Box } from '@material-ui/core';
import postData from '../data/post.json';
import Post from './Post/Post';
import DisplayMode from './Post/DisplayMode';

const PostWrapper = () => (
  <Box style={{
    height: 'calc(100vh - 110px)',
    overflow: 'auto',
  }}
  >
    {postData.map((post) => (
      <Post
        title={post.title}
        content={post.content}
        createdAt={new Date(post.createdAt)}
        createdBy={post.createdBy}
        description={post.description}
        displayMode={DisplayMode.SUMMARY}
      />
    ))}
  </Box>
);

export default PostWrapper;
