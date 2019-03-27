import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles/page.css';
import LandingContainer from '../components/landing/LandingContainer';
import Footer from '../components/common/Footer';
export default class Landing extends React.Component {

     constructor(props) {
        super(props);
    }

     render() { // TODO remove footer
        return (
            <div className="page">
              <LandingContainer />
              <Footer />
            </div>);
    }
}