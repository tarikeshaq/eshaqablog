import * as React from 'react';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/styles/page.css';

export default class Landing extends React.Component {

     constructor(props) {
        super(props);
    }

     render() {
        return (
            <div className="page">
                <h1>THIS IS THE LANDING PAGE</h1>
                <Link href="/blogs"><a>Go to blogs</a></Link>
            </div>);
    }
}