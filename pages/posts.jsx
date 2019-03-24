import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>POSTS</h2>
        <Footer />
      </div>
    )
  }
}
