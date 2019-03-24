import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class ThumbnailDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
  
    render() {
    return (
        <Card.Body>
            <Card.Title>
                {this.state.title}
            </Card.Title>
            <Card.Text>
                {this.state.description}
            </Card.Text>
        </Card.Body>
    );
  }
}
