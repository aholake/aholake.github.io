import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import postData from '../data/post.json';
import { PostModel } from '../components/Post/model/PostModel';
import PostDetailComponent from '../components/Post/PostDetail';

const PostDetail = () => {
  const { postId } = useParams<any>();
  const post: PostModel | undefined = postData.find((value) => value.id === Number(postId));
  if (!post) {
    return <Typography color="error">The content was deleted or not existing</Typography>;
  }

  return (
    <PostDetailComponent post={post} />
  );
};
export default PostDetail;
