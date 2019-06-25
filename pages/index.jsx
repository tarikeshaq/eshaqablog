import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingContainer from '../components/landing/LandingContainer';
import Meta from '../components/meta';
import Page from '../layouts/main';
export default class Landing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() { // TODO remove footer
    return (
      <div style={{ height: '100%' }}>
        <Meta />
        <Page>
          <LandingContainer />
        </Page>
      </div>);
  }
}