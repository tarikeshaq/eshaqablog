import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Router from 'next/router';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub, faGoodreads } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-color: #8860d0;
    color: white;
`;

const StyledFooterTitle = styled.h3`
    text-align: center
`;

const StyledCol = styled(Col)`
    text-align: center;
`;

const StyledNavigate = styled.p`
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    width: max-content;
    text-align: center;
    cursor: pointer;
`;

const ClickableIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
`;

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
            <StyledFooter>
                <Container>
                    <Row>
                        <StyledCol><StyledFooterTitle>Tarik Eshaq</StyledFooterTitle></StyledCol>
                    </Row>
                    <Row>
                        <StyledCol>
                            <StyledNavigate onClick={() => { Router.push('/blogs') }}>Blog</StyledNavigate>
                        </StyledCol>
                    </Row>
                    <Row>
                        <StyledCol>
                            <StyledNavigate onClick={() => { Router.push('/about') }}> About me</StyledNavigate>
                        </StyledCol >
                        <StyledCol>
                            <StyledNavigate onClick={() => { Router.push('/contact') }}> Contact me</StyledNavigate>
                        </StyledCol>
                    </Row>
                    <Row>
                        <StyledCol>
                            <ClickableIcon onClick={() => { window.open("https://www.linkedin.com/in/tarikeshaq/", '__blank') }} icon={faLinkedin} />
                        </StyledCol>
                        <StyledCol>
                            <ClickableIcon onClick={() => { window.open("https://github.com/tarikeshaq", '__blank') }} icon={faGithub} />
                        </StyledCol>
                        <StyledCol>
                            <ClickableIcon onClick={() => { window.open("https://www.goodreads.com/user/show/77719569-tarik", '__blank') }} icon={faGoodreads} />
                        </StyledCol>
                        <StyledCol>
                            <ClickableIcon onClick={() => { this.sendMail(); }} icon={faEnvelope} />
                        </StyledCol>
                        <StyledCol>
                            <Container>
                                <ClickableIcon icon={faCopyright} />
                                <span className="copyright">Tarik Eshaq 2019</span>
                            </Container>
                        </StyledCol>
                    </Row>
                </Container>
            </StyledFooter>
        );
    }
}