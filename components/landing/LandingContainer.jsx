import React, { Component } from 'react'
import BodyContainer from '../common/BodyContainer';
import Type from './Type'
export default class LandingContainer extends Component {

  render() {
    return (
      <BodyContainer style={{ width: "100%", height: "100%", position: "absolute", textAlign: "center" }}>
        <Type
          loop={true}
          loopDelay={2000}
          nextStringDelay={500}
          speed={70}
        />
      </BodyContainer>
    )
  }
}
