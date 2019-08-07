import React, { Component } from 'react'
import Thumbnail from './Thumbnail';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import BodyContainer from '../common/BodyContainer';
import styled from 'styled-components';

const BlogRow = styled(Row)`
  max-width: 100%;
  text-align: center;
`


export class BlogsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render() {
    const thumbnailsToRender = this.state.posts.map(post => {
      const thumbnailProps = {
        ...post,
        key: post.id
      }
      return (<Col xs={12} md={4}>
        <Thumbnail {...thumbnailProps} />
      </Col>);
    });
    const rowedThumbnails = [];
    let tempThumbnails = [];
    let i = 0;
    for (; i < thumbnailsToRender.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        rowedThumbnails.push(<BlogRow key={i}>
          {tempThumbnails}
        </BlogRow>);
        tempThumbnails = [];
      }
      tempThumbnails.push(thumbnailsToRender[i]);
    }
    if (tempThumbnails.length) {
      rowedThumbnails.push(<BlogRow key={i}>
        {tempThumbnails}
      </BlogRow>)
    }
    return (
      <BodyContainer>
        {rowedThumbnails}
      </BodyContainer>
    )
  }
}
