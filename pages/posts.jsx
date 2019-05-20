import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import '../public/styles/page.css';
import PostsContainer from '../components/posts/PostsContainer';
import fetch from 'isomorphic-unfetch'

export default class Posts extends Component {
  static async getInitialProps({query}) {
    // query.postId has the id to be requested from backend
    const response = await fetch('https://morning-stream-77102.herokuapp.com/blogs/'+query.postId);
    const post = await response.json()
    return post
  }
  render() {
    return (
      <div className="page">
        <Header />
        <PostsContainer {...this.props}/>
        <Footer />
      </div>
    )
  }
}
