import React, { Component } from 'react';
import styled from 'styled-components';

const FigherContainer = styled.div`
    color: white;
`;


export default class Fighter extends Component {
    render() {
        return (
            <FigherContainer>
                <h3>Fighter</h3>
                <div>
                    <p>Growing up in Yemen, surviving an Airstrike, living as a Refugee,
                            it all tought me to fight. I've always believed in growth, and I will always
                            fight for it.</p>
                </div>
            </FigherContainer>
        )
    }
}
