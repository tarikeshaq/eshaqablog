import React, { Component } from 'react'

export default class PostContent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
