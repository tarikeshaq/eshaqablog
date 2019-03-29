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
            <footer>
                <Container>
                    <Row>
                        <Col className="colFooter"><h3 className="footerTitle">Tarik Eshaq</h3></Col>
                    </Row>
                    <Row>
                        <Col className="colFooter">
                            <p className="navigateFooter" onClick={() => {Router.push('/blogs')}}>Blog</p>
                        </Col>
                        <Col className="colFooter">
                            <p className="navigateFooter" onClick = {() => {Router.push('/about')}}>About me</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="colFooter">
                            <p className="navigateFooter" onClick={() => {Router.push('/portfolio')}}> Portfolio</p>
                        </Col >
                        <Col className="colFooter">
                            <p className="navigateFooter" onClick={() => {Router.push('/contact')}}> Contact me</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="colFooter">
                            <FontAwesomeIcon className="icon" onClick={() => {window.open("https://www.linkedin.com/in/tarikeshaq/", '__blank')}} icon={ faLinkedin } />
                        </Col>
                        <Col className="colFooter">
                            <FontAwesomeIcon className="icon" onClick={() => {window.open("https://github.com/tarikeshaq", '__blank')}} icon = { faGithub } />
                        </Col>
                        <Col className="colFooter">
                            <FontAwesomeIcon className="icon" onClick={() => {window.open("https://www.goodreads.com/user/show/77719569-tarik", '__blank')}} icon = { faGoodreads } />
                        </Col>
                        <Col className="colFooter">
                            <FontAwesomeIcon className="icon" onClick={() => {this.sendMail();}}icon = { faEnvelope } />
                        </Col>
                        <Col className="colFooter">
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