import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub, faGoodreads } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    color: white;
`;

const StyledCol = styled(Col)`
    text-align: center;
`;


const ClickableIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
`;

function sendMail() {
  const link = `${'mailto:tarikeshaq@gmail.com'
          + '?subject='}${escape('PLEASE INPUT SUBJECT')
  }&body=${escape('ENTER MESSAGE BODY HERE')}`;
  window.location.href = link;
}

export default () => (
  <StyledFooter>
    <Container>
      <Row>
        <StyledCol>
          <ClickableIcon onClick={() => { window.open('https://www.linkedin.com/in/tarikeshaq/', '__blank'); }} icon={faLinkedin} />
        </StyledCol>
        <StyledCol>
          <ClickableIcon onClick={() => { window.open('https://github.com/tarikeshaq', '__blank'); }} icon={faGithub} />
        </StyledCol>
        <StyledCol>
          <ClickableIcon onClick={() => { window.open('https://www.goodreads.com/user/show/77719569-tarik', '__blank'); }} icon={faGoodreads} />
        </StyledCol>
        <StyledCol>
          <ClickableIcon onClick={() => { sendMail(); }} icon={faEnvelope} />
        </StyledCol>
        <StyledCol>
          <Container>
            <ClickableIcon icon={faCopyright} />
          </Container>
        </StyledCol>
      </Row>
    </Container>
  </StyledFooter>
);
