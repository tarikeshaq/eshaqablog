import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import React, { Component } from 'react'

const StyledContainer = styled(Container)`
padding: 10px;
padding-bottom: 150px;
background-color:  #5AB9EA;
`;

export default function BodyContainer(props) {

    return (
        <StyledContainer {...props} />
    )
}

