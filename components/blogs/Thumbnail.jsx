import React, { Component } from 'react';
import ThumbnailContainer from './ThumbnailContainer';
import ThumbnailImage from './ThumbnailImage';
import ThumbnailDescription from './ThumbnailDescription';

export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    const {
      _id, image, title, summary,
    } = this.state;
    return (
      <ThumbnailContainer id={_id}>
        <ThumbnailImage image={image} />
        <ThumbnailDescription title={title} description={summary} />
      </ThumbnailContainer>
    );
  }
}
