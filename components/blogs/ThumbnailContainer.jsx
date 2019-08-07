import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Router from 'next/router';
import styled from 'styled-components';

const BlogCard = styled(Card)`
  width: 18rem;
  cursor: pointer;
  text-align: center;
  margin: auto;
`;

export default class ThumbnailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  onClick = () => {
    Router.push('/posts?postId=' + this.state.id);
  }

  render() {
    return (
      <BlogCard onClick={this.onClick}>
        {this.props.children}
      </BlogCard>
    )
  }
}
