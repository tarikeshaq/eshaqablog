import * as React from 'react';
import LandingContainer from '../components/landing/LandingContainer';
import Meta from '../components/meta';
import Page from '../layouts/main';
export default class Landing extends React.Component {

  render() {
    return (
      <div style={{ height: '100%', overflow: "hidden" }}>
        <Meta />
        <Page>
          <LandingContainer />
        </Page>
      </div>);
  }
}