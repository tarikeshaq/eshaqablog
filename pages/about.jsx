import React, { Component } from 'react'
import Meta from '../components/meta'
import Page from '../layouts/main'
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutContainer from '../components/about/AboutContainer';

export default class About extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Meta />
        <Page>
          <AboutContainer />
        </Page>
      </div>);
  }
}
