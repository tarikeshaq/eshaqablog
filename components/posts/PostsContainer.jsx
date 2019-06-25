import React, { Component } from 'react'
import BodyContainer from '../common/BodyContainer';
import PostTitle from './PostTitle';
import BookPostContent from './BookPostContent';
import DefaultPostContent from './DefaultPostContent';
const POST_TYPES = {
  BOOK: "book"
};


function PostContent(props) {
  switch (props.post_type) {
    case POST_TYPES.BOOK:
      return <BookPostContent {...props.content} />
      break;
    default:
      return <DefaultPostContent {...props.content} />
      break;
  }
}

export default class PostsContainer extends Component {



  render() {
    return (
      <BodyContainer>
        <PostTitle {...{ title: this.props.title }} />
        <PostContent {...this.props} />
      </BodyContainer>
    )
  }
}
