import React, { Component } from 'react'
import '../../public/styles/bodyContainer.css';
import Container from 'react-bootstrap/Container';
import Type from './Type'
export default class LandingContainer extends Component {

  render() {
    return (
      <Container style={{width: "100%", height: "100%", position: "absolute", textAlign:"center"}}className="landingContainer">
        <Type 
          loop={true}
          loopDelay={2000}
          nextStringDelay={500}
          speed={70}
        />
      </Container>
    )
  }
}
