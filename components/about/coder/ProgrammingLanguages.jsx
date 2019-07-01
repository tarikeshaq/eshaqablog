import React from 'react';
import AnimatedContainer, { DelayedFadingSpan, DelayedFadingContainer } from './AnimatedContainer';
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
                <div>
                    <DelayedFadingSpan count={this.state.count} order={1}>
                        <IconImage src="/static/images/gopher.png" fluid></IconImage>
                    </DelayedFadingSpan>
                    <DelayedFadingSpan count={this.state.count} order={2}>
                        <IconImage src="/static/images/ferris.png" fluid></IconImage>
                    </DelayedFadingSpan>
                    <DelayedFadingSpan count={this.state.count} order={3}>
                        <IconImage src="/static/images/javascript.png" fluid></IconImage>
                    </DelayedFadingSpan>
                    <DelayedFadingSpan count={this.state.count} order={4}>
                        <IconImage src="/static/images/java.png" fluid></IconImage>
                    </DelayedFadingSpan>
                    <DelayedFadingSpan count={this.state.count} order={5}>
                        <IconImage src="/static/images/cpp.png" fluid></IconImage>
                    </DelayedFadingSpan>
                    <DelayedFadingSpan count={this.state.count} order={6}>
                        <IconImage src="/static/images/c.png" fluid></IconImage>
                    </DelayedFadingSpan>
                </div>
            </DelayedFadingContainer>
        )
    }
}