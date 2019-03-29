import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import '../../public/styles/bodyContainer.css';
import Work from './Work';
import School from './School';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class PortfolioContainer extends Component {
  render() {
    return (
      <Container className="bodyContainer" style={{ maxWidth: 'none', overflowX: "hidden"}}>
      <Row>
        <Col className="pull-left" style={{float: "left"}}><Work /></Col>
        <Col><School /></Col>
      </Row>
        <Skills />
        <Projects />
        <Resume />
      </Container>
    )
  }
}
