import React from 'react';
import AnimatedContainer, { DelayedFadingSpan } from './AnimatedContainer';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';


const ProgrammingLanguageImage = styled(Image)`
    width: 10%;
    height: 10%;
    left-padding: 5%;
`;

export default class ProgrammingLanguages extends AnimatedContainer {
    constructor(props) {
        super(props);
        this.maxCount = 7;
    }

    render() {
        return (
            <div>
                <div>ProgrammingLanguages:</div>
                <DelayedFadingSpan count={this.state.count} order={1}>
                    <ProgrammingLanguageImage src="/static/images/gopher.png" roundedCircle fluid></ProgrammingLanguageImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={2}>
                    <ProgrammingLanguageImage src="/static/images/ferris.png" roundedCircle fluid></ProgrammingLanguageImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={3}>
                    <ProgrammingLanguageImage src="/static/images/javascript.png" roundedCircle fluid></ProgrammingLanguageImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={4}>
                    <ProgrammingLanguageImage src="/static/images/java.png" roundedCircle fluid></ProgrammingLanguageImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={5}>
                    <ProgrammingLanguageImage src="/static/images/cpp.png" roundedCircle fluid></ProgrammingLanguageImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={6}>
                    <ProgrammingLanguageImage src="/static/images/c.png" roundedCircle fluid></ProgrammingLanguageImage>
                </DelayedFadingSpan>
            </div>
        )
    }
}