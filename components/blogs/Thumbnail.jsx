import React, { Component } from 'react'
import ThumbnailContainer from './ThumbnailContainer';
import ThumbnailImage from './ThumbnailImage';
import ThumbnailDescription from './ThumbnailDescription';

export default class Thumbnail extends Component {
  constructor(props) {
      super(props);
      this.state = {
          ...props
      }
  }

  render() {
    return (
        <ThumbnailContainer id={this.state._id}>
            <ThumbnailImage image={this.state.image} />
            <ThumbnailDescription title={this.state.title} description={this.state.summary} />
        </ThumbnailContainer>
    )
  }
}
