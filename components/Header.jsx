import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import styled from 'styled-components';

export class Header extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link href="/">
                <a className='navbar-brand'>
                    Tarik Eshaq
                </a>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/blogs" className='nav-link'>
                        <a className="nav-link">Blogs</a>
                    </Link>
                    <Link href="/portfolio">
                        <a className="nav-link">Portfolio</a>
                    </Link>
                </Nav>
                <Nav>
                    <Link href='/contact'>
                        <a className='nav-link'>Contact Me</a>
                    </Link>
                    <Link href="/about">
                        <a className='nav-link'>About me</a>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}
