import React from 'react';
import fetch from 'isomorphic-unfetch';
import BlogsContainer from '../components/blogs/BlogsContainer';
import Page from '../layouts/main';
import Meta from '../components/meta';


export default class Blogs extends React.Component {
  static async getInitialProps() {
    const response = await fetch('https://morning-stream-77102.herokuapp.com/blogs');
    const posts = await response.json();
    return {
      posts: [...posts],
    };
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Meta />
        <Page>
          <BlogsContainer {...this.props} />
        </Page>
      </div>
    );
  }
}
