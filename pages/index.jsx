import React from 'react';
import LandingContainer from '../components/landing/LandingContainer';
import Meta from '../components/meta';
import Page from '../layouts/main';

export default () => (

  <div style={{ height: '100%' }}>
    <Meta />
    <Page>
      <LandingContainer />
    </Page>
  </div>
);
