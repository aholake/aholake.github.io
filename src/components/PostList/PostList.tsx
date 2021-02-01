import React from 'react';
import { Box } from '@material-ui/core';
import PostEntry from '../Post/PostEntry';
import { PostModel } from '../Post/model/PostModel';

interface PropsType {
  posts: PostModel[];
}
const PostList = ({ posts }: PropsType) => (
  <Box>
    {posts.map((post: PostModel) => (
      <PostEntry post={post} />
    ))}
  </Box>
);

export default PostList;
