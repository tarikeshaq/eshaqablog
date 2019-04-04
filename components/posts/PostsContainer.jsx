import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import '../../public/styles/bodyContainer.css';
import PostTitle from './PostTitle';
import PostContent from './PostContent';

export default class PostsContainer extends Component {
  render() {
    return (
      <Container className="bodyContainer">
        <PostTitle {...{title: this.props.title}}/>
        <PostContent {...{content: this.props.content}} />
      </Container>
    )
  }
}
