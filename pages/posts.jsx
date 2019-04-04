import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import '../public/styles/page.css';
import PostsContainer from '../components/posts/PostsContainer';
import { fakeFetch } from '../api/fakeFetch';


export default class Posts extends Component {
  static async getInitialProps() {
    return fakeFetch('post').then(response => { // get post from URL
        return { 
            title: response.title,
            content: response.content,
            date: response.date
         }
    });
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
