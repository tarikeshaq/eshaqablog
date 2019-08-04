import React, { Component } from 'react';
import BodyContainer from '../common/BodyContainer';
import PersonalImage from './PersonalImage';
import Fighter from './Fighter';
import Learner from './Learner';
import Coder from './coder/Coder';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
const CenteredRow = styled(Row)`
  text-align: center
`;

export default class AboutContainer extends Component {
  render() {
    return (
      <BodyContainer style={{ maxWidth: 'none', overflowX: "hidden" }}>
        <CenteredRow>
          <Col sm={12} md={12} lg={4}>
            <PersonalImage />
          </Col>
          <Col sm={12} md={12} lg={4}>
            <Fighter />
          </Col>
          <Col sm={12} md={12} lg={4}>
            <Coder />
          </Col>
        </CenteredRow>
        <CenteredRow>
          <Col>
            <Learner />
          </Col>
        </CenteredRow>


      </BodyContainer>
    )
  }
}
