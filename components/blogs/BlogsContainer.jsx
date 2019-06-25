import React, { Component } from 'react'
import Thumbnail from './Thumbnail';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import BodyContainer from '../common/BodyContainer';

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
      return (<Col xs={6} md={4}>
        <Thumbnail {...thumbnailProps} />
      </Col>);
    });
    const rowedThumbnails = [];
    let tempThumbnails = [];
    let i = 0;
    for (; i < thumbnailsToRender.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        rowedThumbnails.push(<Row className="mt-2 mb-2" key={i}>
          {tempThumbnails}
        </Row>);
        tempThumbnails = [];
      }
      tempThumbnails.push(thumbnailsToRender[i]);
    }
    if (tempThumbnails.length) {
      rowedThumbnails.push(<Row className="mt-2 mb-2" key={i}>
        {tempThumbnails}
      </Row>)
    }
    return (
      <BodyContainer>
        {rowedThumbnails}
      </BodyContainer>
    )
  }
}
