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
                        <a href="/static/resume/Tarik_Eshaq_Resume.pdf" className='nav-link' download="Tarik_Eshaq_Resume">Resume</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}
