import { Component } from 'react'
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
            count: -1
        };
        this.maxCount = 5;
        this.updating = Promise.resolve();
        this.animationTime = ANIMATION_TIME;
    }

    componentDidMount() {
        if (this.state.count < 0) {
            this.setState({
                count: 0
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
            if (this.state.count == this.maxCount) {
                return;
            }
            this.updating = new Promise((resolve, reject) => {
                setTimeout(() => {
                    this._isMounted = true;
                    this.setState({
                        ...this.state,
                        count: this.state.count + 1,
                    }, () => {
                        this.lock = false;
                        resolve();
                    });
                }, this.animationTime);
            });
        });
    }
    render() {
        return (
            { ...this.props.children }
        )
    }
}

export function DelayedFadingSpan(props) {
    return (
        <DelayedComponent count={props.count} order={props.order}>
            <FadingSpan>{props.children}</FadingSpan>
        </DelayedComponent>
    );
}

export function DelayedComponent(props) {
    if (props.count >= props.order) {
        return (
            { ...props.children }
        );
    } else {
        return null;
    }
}

export function DelayedFadingContainer(props) {
    return (
        <DelayedComponent count={props.count} order={props.order}>
            <FadingDiv>{props.children}</FadingDiv>
        </DelayedComponent>
    );
}