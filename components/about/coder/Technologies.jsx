import React from 'react';
import AnimatedContainer, { DelayedFadingSpan, DelayedFadingContainer } from './AnimatedContainer';
import IconImage from './IconImage';

export default class Technologies extends AnimatedContainer {
  constructor(props) {
    super(props);
    this.maxCount = 3;
  }

  render() {
    return (
      <DelayedFadingContainer count={this.state.count} order={0}>
        <h5>Technologies</h5>
        <div>
          <DelayedFadingSpan count={this.state.count} order={1}>
            <IconImage src="/static/images/docker.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={1}>
            <IconImage src="/static/images/jira.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={1}>
            <IconImage src="/static/images/git.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={1}>
            <IconImage src="/static/images/sql.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={1}>
            <IconImage src="/static/images/mongo.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={1}>
            <IconImage src="/static/images/wa.png" fluid />
          </DelayedFadingSpan>
        </div>
        <div>
          <DelayedFadingSpan count={this.state.count} order={2}>
            <IconImage src="/static/images/node.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={2}>
            <IconImage src="/static/images/grpc.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={2}>
            <IconImage src="/static/images/react.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={2}>
            <IconImage src="/static/images/redux.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={2}>
            <IconImage src="/static/images/jasmine.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={2}>
            <IconImage src="/static/images/gcp.png" fluid />
          </DelayedFadingSpan>
        </div>
        <div>
          <DelayedFadingSpan count={this.state.count} order={3}>
            <IconImage src="/static/images/heroku.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={3}>
            <IconImage src="/static/images/kubernetes.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={3}>
            <IconImage src="/static/images/unix.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={3}>
            <IconImage src="/static/images/jenkins.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={3}>
            <IconImage src="/static/images/github.png" fluid />
          </DelayedFadingSpan>
          <DelayedFadingSpan count={this.state.count} order={3}>
            <IconImage src="/static/images/android.png" fluid />
          </DelayedFadingSpan>
        </div>
      </DelayedFadingContainer>
    );
  }
}
