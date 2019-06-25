import React, { Component } from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';
const Container = styled.div`
    min-height: 100%;
    position: relative;
    background-color: #84CEeb!important;
`;

export default ({ children }) => (
    <Container>
        <Header />
        {children}
        <Footer />
    </Container>
);