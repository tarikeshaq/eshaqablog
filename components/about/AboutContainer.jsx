import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import BodyContainer from '../common/BodyContainer';
import PersonalImage from './PersonalImage';
import Fighter from './Fighter';
import Learner from './Learner';

import Coder from './coder/Coder';

const CenteredRow = styled(Row)`
  text-align: center;
`;

const PaddedCol = styled(Col)`
  padding-bottom: 2%;
`;

export default () => (
  <BodyContainer style={{
    maxWidth: 'none', overflowX: 'hidden',
  }}
  >
    <CenteredRow>
      <PaddedCol sm={12} md={12} lg={4}>
        <PersonalImage />
      </PaddedCol>
      <PaddedCol sm={12} md={12} lg={4}>
        <Fighter />
      </PaddedCol>
      <PaddedCol sm={12} md={12} lg={4}>
        <Coder />
      </PaddedCol>
    </CenteredRow>
    <CenteredRow>
      <PaddedCol>
        <Learner />
      </PaddedCol>
    </CenteredRow>
  </BodyContainer>
);
