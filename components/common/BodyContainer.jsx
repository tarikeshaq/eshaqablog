import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import React from 'react'

const StyledContainer = styled(Container)`
padding: 10px;
padding-bottom: 150px;

`;

export default function BodyContainer(props) {

    return (
        <StyledContainer {...props} />
    )
}

