import React from 'react'
import styled from 'styled-components';
import AnimatedContainer, { DelayedComponent } from './AnimatedContainer';
import ProgrammingLanguages from './ProgrammingLanguages';
import Technologies from './Technologies';

const CoderContainer = styled.div`
    left: 75%;
    top: 10%;
    color: white;
`;

export default class Coder extends AnimatedContainer {
    constructor(props) {
        super(props);
        this.maxCount = 2;
    }

    render() {
        return (
            <CoderContainer>
                <h3>Coder</h3>
                <DelayedComponent count={this.state.count} order={1}>
                    <ProgrammingLanguages />
                </DelayedComponent>
                <DelayedComponent count={this.state.count} order={2}>
                    <Technologies />
                </DelayedComponent>
            </CoderContainer>
        )
    }
}
