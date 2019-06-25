import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

class Stars extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.stars} Stars</h2>
      </div>
    );
  }
}

function Overall(props) {
  return props.overall.split('\n').map((section, index) => {
    return (
      <p key={index}>{section}</p>
    );
  });
}

const PostContainer = styled(Container)`
  font-family: 'Raleway', sans-serif;
  line-height: 300%
`;

const PostText = styled.p`
  font-size: 1.5rem;
`;

const PostTitle = styled.h4`
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
`;



export default class PostContent extends Component {
  render() {


    return (
      <PostContainer className="post">
        <Container className="overall">
          <PostTitle>Overall Summary</PostTitle>
          <Overall overall={this.props.overall} />
        </Container>
        <Container className="like">
          <PostTitle>What I liked most about the book</PostTitle>
          <PostText>{this.props.like}</PostText>
        </Container>
        <Container className="not-like">
          <PostTitle>What I liked least about the book</PostTitle>
          <PostText>{this.props.not_like}</PostText>
        </Container>
        <Container className="rating">
          <PostTitle>Rating</PostTitle>
          <Stars stars={this.props.rating} />
          <PostText>{this.props.rating_desc}</PostText>
        </Container>
      </PostContainer>
    )
  }
}
