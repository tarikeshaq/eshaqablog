import React, { Component } from 'react'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import Image from 'react-bootstrap/Image';

const FadeInAnimation = keyframes`${fadeIn}`;

const FadingP = styled.p`
    animation: 2s ${FadeInAnimation};
`;
const FadingSpan = styled.span`
    animation: 2s ${FadeInAnimation};
`;

const ProgrammingLanguageImage = styled(Image)`
    width: 10%;
    height: 10%;
    left-padding: 5%;
`;

// To ensure the application does not keep counting if all 
//    animations are done

const CoderContainer = styled.div`
    position: absolute;
    left: 75%;
    top: 50%;
    color: white;
`;

export default class Coder extends Component {
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

function DelayedComponent(props) {
    if (props.count >= props.order) {
        return (
            { ...props.children }
        );
    } else {
        return null;
    }
}

class ProgrammingLanguages extends Coder {
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

function DelayedFadingSpan(props) {
    return (
        <DelayedComponent count={props.count} order={props.order}>
            <FadingSpan>{props.children}</FadingSpan>
        </DelayedComponent>
    );
}
