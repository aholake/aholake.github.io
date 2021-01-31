import React from 'react';
import { Box } from '@material-ui/core';
import Post from '../Post/Post';
import DisplayMode from '../Post/DisplayMode';

interface PropsType {
  posts: Record<string, any>[]
}

const PostList = ({ posts }: PropsType) => (
  <Box style={{
    height: 'calc(100vh - 110px)',
    overflow: 'auto',
  }}
  >
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

export default PostList;
