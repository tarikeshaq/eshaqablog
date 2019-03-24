import React, { Component } from 'react'
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div>
            <Header />
            <h2>portfolio</h2>
            <Footer />
      </div>
    );
  }
}
