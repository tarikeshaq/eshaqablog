import React, { Component } from 'react'

export default class PostTitle extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.title}</h5>
      </div>
    )
  }
}
