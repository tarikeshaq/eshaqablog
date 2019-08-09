import React from 'react';
import PropTypes from 'prop-types';
import BodyContainer from '../common/BodyContainer';
import PostTitle from './PostTitle';
import BookPostContent from './BookPostContent';
import DefaultPostContent from './DefaultPostContent';

const POST_TYPES = {
  BOOK: 'book',
};


function PostContent(props) {
  // eslint-disable-next-line camelcase
  const { post_type, content } = props;
  // eslint-disable-next-line camelcase
  switch (post_type) {
    case POST_TYPES.BOOK:
      return <BookPostContent {...content} />;
    default:
      return <DefaultPostContent {...content} />;
  }
}

PostContent.defaultProps = {
  post_type: '',
  content: {},
};

PostContent.propTypes = {
  post_type: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object,
};

export default function PostsContainer(props) {
  const { title } = props;
  return (
    <BodyContainer>
      <PostTitle {...{ title }} />
      <PostContent {...props} />
    </BodyContainer>
  );
}

PostsContainer.defaultProps = {
  title: '',
};

PostsContainer.propTypes = {
  title: PropTypes.string,
};
