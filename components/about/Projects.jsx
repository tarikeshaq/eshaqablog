import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Projects extends Component {
  render() {
    return (
      <Container className="about-section">
        <h6 >What I didn't pay or get payed to do </h6>
        <ListGroup variant="flush">
          <ListGroup.Item> This website! Built using Next.JS for client side rendering + React. GoLang for the backend with a MongoDB database. I was bored...</ListGroup.Item>
          <ListGroup.Item> Thought it would be a good idea to build a ELO system for Pool at SAP for the interns, played around with the Slack API. </ListGroup.Item>
          <ListGroup.Item> Built a Minesweeper clone one time because I solved a Leetcode problem on BFS (Please don't sue me, Microsoft) </ListGroup.Item>
          <ListGroup.Item> Pretended to make a cool Node.JS/Express.JS website by doing an online course </ListGroup.Item>
          <ListGroup.Item> Developed the backend for a Java Android application that utilizes a decentralized network to...... Oh wait that was a hackathon, nvm 24 hours was definitely not enough </ListGroup.Item>
          <ListGroup.Item> A few Hackathons, a bit of Machine Learning (More like calling APIs that do Machine Learning) and a ton of bugs </ListGroup.Item>
        </ListGroup>
      </Container>
    )
  }
}
