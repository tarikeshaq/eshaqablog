import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeInAnimation = keyframes`${fadeIn}`;


const FadingSpan = styled.span`
    animation: 2s ${FadeInAnimation};
`;
const FadingDiv = styled.div`
    animation: 2s ${FadeInAnimation};
`;

const ANIMATION_TIME = 2000; // 2s


// Important
//
// To extend this,
// (Manditory) Set the this.maxCount to the number elements that will be animated (Default 5)
// (Optional)  Set this.animationTime to be the time of each animation (Default 2s)
export default class AnimatedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: -1,
    };
    this.maxCount = 5;
    this.updating = Promise.resolve();
    this.animationTime = ANIMATION_TIME;
  }

  componentDidMount() {
    const { count } = this.state;
    if (count < 0) {
      this.setState({
        count: 0,
      });
    }
  }

  componentDidUpdate() {
    this.updating.then(() => {
      // Lock is used to prevent other asyncronous process
      //  from coming here and changing the state before the setTimout is done
      if (this.lock) {
        return;
      }
      this.lock = true;
      const { count } = this.state;
      if (count === this.maxCount) {
        return;
      }
      this.updating = new Promise((resolve) => {
        setTimeout(() => {
          // eslint-disable-next-line no-underscore-dangle
          this._isMounted = true;
          const prevState = this.state;
          // eslint-disable-next-line no-shadow
          const { count } = this.state;
          this.setState({
            ...prevState,
            count: count + 1,
          }, () => {
            this.lock = false;
            resolve();
          });
        }, this.animationTime);
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      { ...children }
    );
  }
}
AnimatedContainer.defaultProps = {
  children: React.createElement('div'),
};

AnimatedContainer.propTypes = {
  children: PropTypes.node,
};

export function DelayedFadingSpan(props) {
  const { count, order, children } = props;
  return (
    <DelayedComponent count={count} order={order}>
      <FadingSpan>{children}</FadingSpan>
    </DelayedComponent>
  );
}

DelayedFadingSpan.defaultProps = {
  count: 0,
  order: 0,
  children: React.createElement('div'),
};

DelayedFadingSpan.propTypes = {
  count: PropTypes.number,
  order: PropTypes.number,
  children: PropTypes.node,
};

export function DelayedComponent(props) {
  const { count, order, children } = props;
  if (count >= order) {
    return (
      { ...children }
    );
  }
  return null;
}

export function DelayedFadingContainer(props) {
  const { count, order, children } = props;
  return (
    <DelayedComponent count={count} order={order}>
      <FadingDiv>{children}</FadingDiv>
    </DelayedComponent>
  );
}

DelayedFadingContainer.defaultProps = {
  count: 0,
  order: 0,
  children: React.createElement('div'),
};

DelayedFadingContainer.propTypes = {
  count: PropTypes.number,
  order: PropTypes.number,
  children: PropTypes.node,
};
