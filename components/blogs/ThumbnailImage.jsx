import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class ThumbnailImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    const { image } = this.state;
    return (
      <Card.Img variant="top" src={image} />
    );
  }
}
