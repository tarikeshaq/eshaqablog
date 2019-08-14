import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import BodyContainer from '../common/BodyContainer';
import Thumbnail from './Thumbnail';

const BlogRow = styled(Row)`
  max-width: 100%;
  text-align: center;
`;

const BlogCol = styled(Col)`
  padding-bottom: 3%
`;

const StyledSpan = styled.span`
  color: white;
  text-align: center
`;

export default class BlogsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    const { posts } = this.state;
    const thumbnailsToRender = posts.map((post) => {
      const thumbnailProps = {
        ...post,
        key: post.id,
      };
      return (
        <BlogCol xs={12} md={4}>
          <Thumbnail {...thumbnailProps} />
        </BlogCol>
      );
    });
    const rowedThumbnails = [];
    let tempThumbnails = [];
    let i = 0;
    for (; i < thumbnailsToRender.length; i += 1) {
      if (i % 3 === 0 && i !== 0) {
        rowedThumbnails.push(
          <BlogRow key={i}>
            {tempThumbnails}
          </BlogRow>,
        );
        tempThumbnails = [];
      }
      tempThumbnails.push(thumbnailsToRender[i]);
    }
    if (tempThumbnails.length) {
      rowedThumbnails.push(
        <BlogRow key={i}>
          {tempThumbnails}
        </BlogRow>,
      );
    }
    if (rowedThumbnails.length > 0) {
      return (
        <BodyContainer>
          {rowedThumbnails}
        </BodyContainer>
      );
    }

    return (
      <BodyContainer>
        <StyledSpan>
Looks like I haven&apos;t written anything yet
        </StyledSpan>
        <span role="img" aria-label="sad">
        😳
        </span>
        <StyledSpan>
         Come back soon!
           And enjoy some Tic-Tac-Toe at the home page
        </StyledSpan>
        <span role="img" aria-label="happy">
        😁
        </span>
      </BodyContainer>
    );
  }
}
