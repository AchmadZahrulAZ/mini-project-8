import React from 'react';
import Header from '../components/Header';
import RecentBlogPosts from '../components/RecentBlogPosts';
import AllBlogPosts from '../components/AllBlogPosts';
import Pagination from '../components/Pagination';

const Blog = () => {
  return (
    <>
        <Header title="THE BLOG" />
        <RecentBlogPosts />
        <AllBlogPosts />
        <Pagination />
    </>
  )
}

export default Blog;