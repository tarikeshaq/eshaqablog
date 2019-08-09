import React from 'react';
import Meta from '../components/meta';
import Page from '../layouts/main';
import AboutContainer from '../components/about/AboutContainer';

export default () => (

  <div style={{ height: '100%' }}>
    <Meta />
    <Page>
      <AboutContainer />
    </Page>
  </div>
);
