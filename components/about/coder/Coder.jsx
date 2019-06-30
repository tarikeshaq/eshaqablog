import React from 'react'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import AnimatedContainer, { DelayedComponent } from './AnimatedContainer';
import ProgrammingLanguages from './ProgrammingLanguages';

const FadeInAnimation = keyframes`${fadeIn}`;

const FadingP = styled.p`
    animation: 2s ${FadeInAnimation};
`;

const CoderContainer = styled.div`
    position: absolute;
    left: 75%;
    top: 50%;
    color: white;
`;

export default class Coder extends AnimatedContainer {
    constructor(props) {
        super(props);
        this.maxCount = 5;
    }

    render() {
        return (
            <CoderContainer>
                <h3>Coder</h3>
                <DelayedComponent count={this.state.count} order={1}>
                    <ProgrammingLanguages />
                </DelayedComponent>
                <DelayedComponent count={this.state.count} order={2}>
                    <FadingP style={{ color: "white" }}>HI</FadingP>
                </DelayedComponent>
                <DelayedComponent count={this.state.count} order={3} >
                    <FadingP style={{ color: "white" }}>HI</FadingP>
                </DelayedComponent>
                <DelayedComponent count={this.state.count} order={4} >
                    <FadingP style={{ color: "white" }}>HI</FadingP>
                </DelayedComponent>
                <DelayedComponent count={this.state.count} order={5} >
                    <FadingP style={{ color: "white" }}>HI</FadingP>
                </DelayedComponent>
            </CoderContainer>
        )
    }
}
