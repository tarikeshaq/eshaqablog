import React, { Component } from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/styles/page.css'; 
import ContactContainer from '../components/contact/ContactContainer';

export default class Contact extends Component {
  render() {
    return (
      <div className="page">
            <Header />
            <ContactContainer />
            <Footer />
      </div>
    );
  }
}
