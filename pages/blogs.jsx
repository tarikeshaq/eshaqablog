import * as React from 'react';
import { BlogsContainer } from '../components/blogs/BlogsContainer';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
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