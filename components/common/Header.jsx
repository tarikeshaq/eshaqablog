import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';


export default class Header extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="dark" >
                <Link href="/">
                    <a className='navbar-brand'>
                        Tarik Eshaq
                </a>
                </Link>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/blogs" >
                            <a className="nav-link">Blogs</a>
                        </Link>
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link href='/contact'>
                            <a className='nav-link'>Contact Me</a>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}
