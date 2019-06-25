import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

export default class School extends Component {
  render() {
    return (
      <Container className="about-section">
        <h6 >What I had to pay to do (UBC Business & Computer Science) </h6>
        <ListGroup variant="flush">
          <ListGroup.Item> Learn to be who I want to be rather than who people expect me to be </ListGroup.Item>
          <ListGroup.Item> Drink unhealthy amounts of paid coffee, occationally write homework and read papers </ListGroup.Item>
          <ListGroup.Item> Learn Learn Learn. Not in class, not about Math, Computer Science or Business. But about life, where I fit in and why it all very much matters </ListGroup.Item>
          <ListGroup.Item> Make friends for life </ListGroup.Item>
          <ListGroup.Item> Explore my passion for Education and Technology and how I hope we use them to change the world! Please let me know if you want to speak about this, I won't shut up</ListGroup.Item>
          <ListGroup.Item> I also did classes and stuff </ListGroup.Item>
        </ListGroup>
      </Container>
    )
  }
}
