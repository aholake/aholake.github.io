import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import postData from '../data/post.json';
import Post from '../components/Post/Post';
import DisplayMode from '../components/Post/DisplayMode';

const PostDetail = () => {
  const { postId } = useParams<any>();
  const post = postData.find((value) => value.id === Number(postId));
  if (!post) {
    return <Typography color="error">The content was deleted or not existing</Typography>;
  }

  return (
    <Post
      id={post.id}
      title={post.title}
      content={post.content}
      description={post.description}
      createdAt={new Date(post.createdAt)}
      createdBy={post.createdBy}
      displayMode={DisplayMode.DETAIL}
      tags={post.tags}
    />
  );
};
export default PostDetail;
