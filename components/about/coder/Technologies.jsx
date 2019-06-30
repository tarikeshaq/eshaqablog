import React from 'react';
import AnimatedContainer, { DelayedFadingSpan, DelayedFadingContainer } from './AnimatedContainer';
import IconImage from './IconImage';

export default class Technologies extends AnimatedContainer {
    constructor(props) {
        super(props);
        this.maxCount = 7;
    }

    render() {
        return (
            <DelayedFadingContainer count={this.state.count} order={0}>
                <h5>Technologies</h5>
                <DelayedFadingSpan count={this.state.count} order={1}>
                    <IconImage src="/static/images/docker.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={2}>
                    <IconImage src="/static/images/jira.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={3}>
                    <IconImage src="/static/images/git.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={4}>
                    <IconImage src="/static/images/sql.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={5}>
                    <IconImage src="/static/images/mongo.png" roundedCircle fluid></IconImage>
                </DelayedFadingSpan>
                <DelayedFadingSpan count={this.state.count} order={6}>
                    <IconImage src="/static/images/wa.png" fluid></IconImage>
                </DelayedFadingSpan>
            </DelayedFadingContainer>
        )
    }
}
