import * as React from 'react';
import LandingContainer from '../components/landing/LandingContainer';
import Meta from '../components/meta';
import Page from '../layouts/main';
export default class Landing extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    import('tic-tac-rust').then(({ State }) => {
      const game = State.new(1);
      this.setState({
        game: game
      });
    });
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