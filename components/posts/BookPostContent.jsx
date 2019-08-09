import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

function Stars(props) {
  const { stars } = props;
  return (
    <div>
      <h2>
        {stars}
        {' '}
Stars
      </h2>
    </div>
  );
}

Stars.defaultProps = {
  stars: 0,
};

Stars.propTypes = {
  stars: PropTypes.number,
};

function Overall(props) {
  return props.overall.split('\n').map((section, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <p style={{ fontSize: '1.5rem', color: 'white' }} key={index}>{section}</p>
  ));
}

const PostContainer = styled(Container)`
  font-family: 'Raleway', sans-serif;
  line-height: 300%
  color: white;
`;

const PostText = styled.p`
  font-size: 1.5rem;
  color: white;
`;

const PostTitle = styled.h4`
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
  color: white;
`;


export default function PostContent(props) {
  const {
    // eslint-disable-next-line camelcase
    overall, like, not_like, rating, rating_desc,
  } = props;
  return (
    <PostContainer className="post">
      <Container className="overall">
        <PostTitle>Overall Summary</PostTitle>
        <Overall overall={overall} />
      </Container>
      <Container className="like">
        <PostTitle>What I liked most about the book</PostTitle>
        <PostText>{like}</PostText>
      </Container>
      <Container className="not-like">
        <PostTitle>What I liked least about the book</PostTitle>

        {/* eslint-disable-next-line camelcase */}
        <PostText>{not_like}</PostText>
      </Container>
      <Container className="rating">
        <PostTitle>Rating</PostTitle>
        <Stars stars={rating} />
        {/* eslint-disable-next-line camelcase */}
        <PostText>{rating_desc}</PostText>
      </Container>
    </PostContainer>
  );
}

PostContent.defaultProps = {
  overall: '',
  like: '',
  not_like: '',
  rating: 0,
  rating_desc: '',
};

PostContent.propTypes = {
  overall: PropTypes.string,
  like: PropTypes.string,
  not_like: PropTypes.string,
  rating: PropTypes.number,
  rating_desc: PropTypes.string,
};
