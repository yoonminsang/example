import React from 'react';
import Footer from '../components/common/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostList from '../components/posts/PostList';
const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostList />
      <Footer />
    </>
  );
};

export default PostListPage;
