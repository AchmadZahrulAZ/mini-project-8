import React from 'react';
import Header from '../components/Header';
import RecentBlogPosts from '../components/RecentBlogPosts';
import AllBlogPosts from '../components/AllBlogPosts';
import Pagination from '../components/Pagination';

const Blog = () => {
  return (
    <>
        <Header />
        <RecentBlogPosts />
        <AllBlogPosts />
        <Pagination />
    </>
  )
}

export default Blog;