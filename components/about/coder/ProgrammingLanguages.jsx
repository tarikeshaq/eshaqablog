import React from 'react';
import AnimatedContainer, { DelayedFadingSpan, DelayedFadingContainer } from './AnimatedContainer';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import IconImage from './IconImage';

export default class ProgrammingLanguages extends AnimatedContainer {
    constructor(props) {
        super(props);
        this.maxCount = 6;
    }

    render() {
        return (
            <DelayedFadingContainer count={this.state.count} order={0}>
                <h5>Programming Languages</h5>
                <DelayedFadingSpan count={this.state.count} order={1}>
                    <IconImage src="/static/images/gopher.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={2}>
                    <IconImage src="/static/images/ferris.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={3}>
                    <IconImage src="/static/images/javascript.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={4}>
                    <IconImage src="/static/images/java.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={5}>
                    <IconImage src="/static/images/cpp.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={6}>
                    <IconImage src="/static/images/c.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
            </DelayedFadingContainer>
        )
    }
}