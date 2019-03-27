import React, { Component } from 'react'
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import AboutContainer from '../components/about/AboutContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/styles/page.css';

export default class About extends Component {
  render() {
    return (
      <div className="page">
            <Header />
            <AboutContainer />
            <Footer />
      </div>
    );
  }
}
