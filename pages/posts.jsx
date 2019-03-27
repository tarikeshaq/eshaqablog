import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import '../public/styles/page.css';
import PostsContainer from '../components/posts/PostsContainer';

export default class Posts extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <PostsContainer />
        <Footer />
      </div>
    )
  }
}
