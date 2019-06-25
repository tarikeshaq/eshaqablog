import React, { Component } from 'react';
import Meta from '../components/meta';
import Page from '../layouts/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactContainer from '../components/contact/ContactContainer';

export default class Contact extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Meta />
        <Page>
          <ContactContainer />
        </Page>
      </div>);
  }
}
