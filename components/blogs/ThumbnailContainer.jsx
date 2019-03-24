import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Router from 'next/router';
export default class ThumbnailContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          ...props,
      };
  }

  onClick = () => {
      Router.push('/posts?postId=' + this.state.id);
  }
  
  render() {
    return (
      <Card onClick={this.onClick} style={{width: '18rem', cursor: 'pointer'}}>
        {this.props.children}
      </Card>
    )
  }
}
