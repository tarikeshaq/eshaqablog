import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import Router from 'next/router';


export default class Header extends Component {
    goToMain() {
        Router.push("/");
    }

    render() {
        return (
            <Navbar expand="lg" variant="dark" >
                <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => this.goToMain()}>
                    Tarik Eshaq
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
