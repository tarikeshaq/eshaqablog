import React, { Component } from 'react';
import Meta from '../components/meta';
import Page from '../layouts/main';
import AboutContainer from '../components/about/AboutContainer';

export default class About extends Component {
  render() {
    return (
      <div style={{ height: '100%', overflow: "hidden" }}>
        <Meta />
        <Page>
          <AboutContainer />
        </Page>
      </div>);
  }
}
