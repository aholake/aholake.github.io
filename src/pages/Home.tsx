import React from 'react';
import posts from '../data/post.json';
import PostList from '../components/PostList/PostList';

const Home = () => <PostList posts={posts} />;
export default Home;
