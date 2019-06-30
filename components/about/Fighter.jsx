import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { TransparentCard, CenteredHeader } from './StyledCard';
import styled from 'styled-components';

const FigherContainer = styled.div`
    position: absolute;
    left: 15%;
    top: 25%;
`;


export default class Fighter extends Component {
    render() {
        return (
            <FigherContainer>
                <TransparentCard bg="dark" text="white" style={{ width: '18rem' }}>
                    <CenteredHeader>Fighter</CenteredHeader>
                    <Card.Body>
                        <Card.Text>
                            Growing up in Yemen, surviving an Airstrike, living as a Refugee,
                            it all tought me to fight. I've always believed in the power of growth, and I will always
                            fight for it.
                        </Card.Text>
                    </Card.Body>
                </TransparentCard>
                <br />
            </FigherContainer>
        )
    }
}
