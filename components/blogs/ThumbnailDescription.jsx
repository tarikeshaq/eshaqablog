import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class ThumbnailDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    const { title, description } = this.state;
    return (
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    );
  }
}
