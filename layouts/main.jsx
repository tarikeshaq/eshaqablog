import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    min-height: 100%;
    position: relative;
    
`;


// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
