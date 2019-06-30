import React, { Component } from 'react';
import BodyContainer from '../common/BodyContainer';
import PersonalImage from './PersonalImage';
import Fighter from './Fighter';
import Learner from './Learner';
import Coder from './coder/Coder';

export default class AboutContainer extends Component {
  render() {
    return (
      <BodyContainer style={{ maxWidth: 'none', overflowX: "hidden" }}>
        <PersonalImage />
        <Fighter />
        <Learner />
        <Coder />
      </BodyContainer>
    )
  }
}
