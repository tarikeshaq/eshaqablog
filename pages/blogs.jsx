import * as React from 'react';
import { BlogsContainer } from '../components/blogs/BlogsContainer';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Blogs extends React.Component {

     constructor(props) {
        super(props);
    }

     render() {
        return (
            <div>
                <Header />
                <BlogsContainer />
                <Footer />
            </div>);
    }
}