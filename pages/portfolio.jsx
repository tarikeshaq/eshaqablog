import React, { Component } from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/styles/page.css';
import PortfolioContainer from '../components/portfolio/PortfolioContainer';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="page">
            <Header />
            <PortfolioContainer />
            <Footer />
      </div>
    );
  }
}
