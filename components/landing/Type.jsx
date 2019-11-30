import React, { Component } from 'react';
import TypeIt from 'typeit';
import styled from 'styled-components';

const TypeItSpan = styled.div`
    color: white;
    margin: auto;
    text-align: center;
    padding-top: 10%;
    font-size: 30px;
`;

export default class Type extends Component {
  componentDidMount() {
    new TypeIt(this.el, this.props)
      .type('Hi there!')
      .pause(1000)
      .delete()
      .type('Thank you for taking the time to check out my site')
      .pause(1000)
      .delete()
      .type('Feel free to check out my resume on the top right for more information about me')
      .pause(500)
      .delete()
      .type('Enjoy the above Rust => WebAssembly => React Tic-Tac-Toe game!')
      .pause(500)
      .delete()
      .type('You can find the code for the game, and other projects on my Github! Link is at the bottom')
      .pause(1000)
      .delete()
      .go();
  }

  render() {
    return (<TypeItSpan ref={(el) => { this.el = el; }} />);
  }
}
