import React, { Component } from 'react';
import TypeIt from 'typeit';
import styled from 'styled-components';

const TypeItSpan = styled.span`
    color: white;
    margin: auto;
    text-align: center;
    display: inline-block;
    position: absolute; 
    top: 50%;
    fontSize: 30px;
`;

export default class Type extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new TypeIt(this.el, this.props)
            .type("Hi there!")
            .pause(1000)
            .delete()
            .type("Thank you for taking the time to check out my site")
            .pause(1000)
            .delete()
            .type("Feel free to check out my blog posts and reach out, even if just for a cup of coffee")
            .pause(1000)
            .delete()
            .go();
    }

    render() {
        return (<TypeItSpan ref={(el) => { this.el = el; }}>{this.props.children}</TypeItSpan>);
    }
}
