import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/post.json';
import PostList from '../components/PostList/PostList';

const TagPage = () => {
  const { tagName } = useParams<any>();
  return <PostList posts={posts.filter((post) => post.tags.includes(tagName))} />;
};

export default TagPage;
