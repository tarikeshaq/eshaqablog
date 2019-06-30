import React, { Component } from 'react';
import BodyContainer from '../common/BodyContainer';
import PersonalImage from './PersonalImage';

export default class AboutContainer extends Component {
  render() {
    return (
      <BodyContainer style={{ maxWidth: 'none', overflowX: "hidden" }}>
        <PersonalImage />
      </BodyContainer>
    )
  }
}
