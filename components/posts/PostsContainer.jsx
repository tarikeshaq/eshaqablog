import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import '../../public/styles/bodyContainer.css';
import PostTitle from './PostTitle';
import BookPostContent from './BookPostContent';
import DefaultPostContent from './DefaultPostContent';
const POST_TYPES = {
  BOOK: "book"
};


function PostContent(props) {
  switch(props.post_type) {
    case POST_TYPES.BOOK:
      return <BookPostContent {...props.content}/>
      break;
    default:
      return <DefaultPostContent {...props.content}/>
      break;
  }
}

export default class PostsContainer extends Component {

  

  render() {
    return (
      <Container className="bodyContainer">
        <PostTitle {...{title: this.props.title}}/>
        <PostContent {...this.props} />
      </Container>
    )
  }
}
