import { Component } from 'react'
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeInAnimation = keyframes`${fadeIn}`;


const FadingSpan = styled.span`
    animation: 2s ${FadeInAnimation};
`;


export default class AnimatedContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: -1
        };
        this.maxCount = 5;
        this.updating = Promise.resolve();
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
                }, 2000);
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