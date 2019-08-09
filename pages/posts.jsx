import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Meta from '../components/meta';
import Page from '../layouts/main';
import PostsContainer from '../components/posts/PostsContainer';

export default class Posts extends Component {
  static async getInitialProps({ query }) {
    // query.postId has the id to be requested from backend
    const response = await fetch(`https://morning-stream-77102.herokuapp.com/blogs/${query.postId}`);
    const post = await response.json();
    return post;
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Meta />
        <Page>
          <PostsContainer {...this.props} />
        </Page>
      </div>
    );
  }
}
