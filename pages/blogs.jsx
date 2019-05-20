import * as React from 'react';
import { BlogsContainer } from '../components/blogs/BlogsContainer';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import fetch from 'isomorphic-unfetch'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles/page.css';

export default class Blogs extends React.Component {

    static async getInitialProps() {
        const response = await fetch('https://morning-stream-77102.herokuapp.com/blogs');
        const posts = await response.json();
        return {
            posts: [...posts]
        };
    }
     constructor(props) {
        super(props);
    }

     render() {
        return (
            <div className="page">
                <Header />
                <BlogsContainer { ...this.props }/>
                <Footer />
            </div>);
    }
}