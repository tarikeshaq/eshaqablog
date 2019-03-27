import * as React from 'react';
import { BlogsContainer } from '../components/blogs/BlogsContainer';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { fakeFetch } from '../api/fakeFetch';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles/page.css';

export default class Blogs extends React.Component {

    static async getInitialProps() {
        return fakeFetch('posts').then(response => {
            return { 
                posts: [...response.posts]
             }
        });
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