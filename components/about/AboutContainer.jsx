import React, { Component } from 'react';
import BodyContainer from '../common/BodyContainer';
import Work from './Work';
import School from './School';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class AboutContainer extends Component {
  render() {
    return (
      <BodyContainer style={{ maxWidth: 'none', overflowX: "hidden" }}>
        <Row className="mt-4 mb-4">
          <Col className="pull-left" style={{ float: "left" }}><Work /></Col>
          <Col><School /></Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col> <Skills /></Col>
          <Col> <Projects /></Col>
        </Row>
        <Resume />
      </BodyContainer>
    )
  }
}
