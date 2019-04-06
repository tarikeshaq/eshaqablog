import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import '../../public/styles/bookPost.css'

class Stars extends Component {
    render() {
      return (
        <div>
          <h2>{this.props.stars} Stars</h2>
        </div>
      );
    }
}

function Overall(props) {
  return props.overall.split('\n').map((section, index) => {
    return (
      <p key={index}>{section}</p>
    );
  });
}


export default class PostContent extends Component {
  render() {
    //let overall = JSON.stringify(this.props.overall);
    //overall = escape(overall);

    return (
      <Container className="post">
        <Container className="overall">
          <h4>Overall Summary</h4>
          <Overall overall = {this.props.overall}/>
        </Container>
        <Container className="like">
          <h4>What I liked most about the book</h4>
          <p>{this.props.like}</p>
        </Container>
        <Container className="not-like">
          <h4>What I liked least about the book</h4>
          <p>{this.props.not_like}</p>
        </Container>
        <Container className="rating">
          <h4>Rating</h4>
          <Stars stars={this.props.rating} />
          <p>{this.props.rating_desc}</p>
        </Container>
      </Container>
    )
  }
}
