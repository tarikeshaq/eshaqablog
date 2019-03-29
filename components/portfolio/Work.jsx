import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Work extends Component {
  render() {
    return (
      <Container>
          <h3 >What I was payed to do (SAP) </h3>
          <ListGroup variant="flush">
            <ListGroup.Item> Build an amazing family of 15 people </ListGroup.Item>
            <ListGroup.Item> Drink unhealthy amounts of free coffee, occationally write production level code </ListGroup.Item>
            <ListGroup.Item> Work with cool modern web technologies, like Service Workers, Web Workers and IndexedDB </ListGroup.Item>
            <ListGroup.Item> Write React & Redux code in TypeScript in a JavaScript project that doesn't use React or Redux </ListGroup.Item>
            <ListGroup.Item> Learned about Agile, Jenkins, Docker, RESTAPIs, Apache (INSERT MORE BUZZWORDS TO IMPRESS RECRUITER HERE)</ListGroup.Item>
          </ListGroup>
      </Container>
    )
  }
}
