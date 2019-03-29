import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Skills extends Component {
  render() {
    return (
        <Container>
            <h3 > What I what you to think I can do </h3>
            <ListGroup variant="flush">
                <ListGroup.Item> Make stuff like this site </ListGroup.Item>
                <ListGroup.Item> Speak in many languages: JavaScript/TypeScript, C++, Python, Java, C#, C Golang </ListGroup.Item>
                <ListGroup.Item> Borrow people's code effectively: React, Node.JS, Mux (Golang), Express.JS, Redux, Bootstrap, JUnit, Jasmine, .NET </ListGroup.Item>
                <ListGroup.Item> Play around with Databases: MongoDB, PostGreSQL </ListGroup.Item>
                <ListGroup.Item> Work with modern web optimization concepts: Service Workers, Web Workers, IndexedDB </ListGroup.Item>
                <ListGroup.Item> Bunch of buzzwords here </ListGroup.Item>
            </ListGroup>
        </Container>
    )
  }
}
