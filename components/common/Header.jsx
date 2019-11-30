/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import Router from 'next/router';

function goToMain() {
  Router.push('/');
}

export default () => (

  <Navbar expand="lg" variant="dark">
    <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => goToMain()}>
                    Tarik Eshaq
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {/* <Link href="/blogs">
          <a href="#" className="nav-link">Blogs</a>
        </Link>
        <Link href="/about">
          <a href="#" className="nav-link">About</a>
        </Link> */}
      </Nav>
      <Nav>
        <a href="/static/resume/Tarik_Eshaq_Resume.pdf" className="nav-link" download="Tarik_Eshaq_Resume">Resume</a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
