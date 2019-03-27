import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Router from 'next/router';
import '../../public/styles/footer.css'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub, faGoodreads, faMailchimp } from '@fortawesome/free-brands-svg-icons'
export default class Footer extends Component {
    constructor(props) {
        super(props);
    }


    sendMail() {
        const link = "mailto:tarikeshaq@gmail.com"
        + "?subject=" + escape("PLEASE INPUT SUBJECT")
        + "&body=" + escape("ENTER MESSAGE BODY HERE")
        window.location.href = link;
    }

     render() {
        return (
            <footer className="page-footer font-small indigo">
                <Container>
                    <Row>
                        <Col><h3 className="footerTitle">Tarik Eshaq</h3></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p onClick={() => {Router.push('/blogs')}}>Blog</p>
                        </Col>
                        <Col>
                            <p onClick = {() => {Router.push('/about')}}>About me</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <p onClick={() => {Router.push('/portfolio')}}> Portfolio</p>
                            </div>
                        </Col>
                        <Col>
                            <p onClick={() => {Router.push('/contact')}}> Contact me</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon className="icon" onClick={() => {window.open("https://www.linkedin.com/in/tarikeshaq/", '__blank')}} icon={ faLinkedin } />
                        </Col>
                        <Col>
                            <FontAwesomeIcon className="icon" onClick={() => {window.open("https://github.com/tarikeshaq", '__blank')}} icon = { faGithub } />
                        </Col>
                        <Col>
                            <FontAwesomeIcon className="icon" onClick={() => {window.open("https://www.goodreads.com/user/show/77719569-tarik", '__blank')}} icon = { faGoodreads } />
                        </Col>
                        <Col>
                            <FontAwesomeIcon className="icon" onClick={() => {this.sendMail();}}icon = { faEnvelope } />
                        </Col>
                        <Col>
                            <Container>
                                <FontAwesomeIcon  icon = { faCopyright } />
                                <span className="copyright">Tarik Eshaq 2019</span>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}