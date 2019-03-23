import * as React from 'react';
import { MainPageContainer } from '../components/MainPageContainer';
import { Toolbar } from '../components/Toolbar';
import { Footer } from '../components/Footer';

export default class MainPage extends React.Component {

     constructor(props) {
        super(props);
    }

     render() {
        return (<div>
            <Toolbar />
            <MainPageContainer />
            <Footer />
        </div>);
    }
}