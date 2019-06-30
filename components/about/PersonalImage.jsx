import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';
import { slideInUp, fadeIn, merge } from 'react-animations';

const SlideAndFade = merge(slideInUp, fadeIn);
const SlideAnimation = keyframes`${SlideAndFade}`;


const Image = styled.img`
    width: 15%;
    height: 30%;
    border-radius: 100%;
    text-align: center;
    position: absolute;
    left: 42.5%;
    top: 35%;
    animation: 2s ${SlideAnimation};
`;

export default class PersonalImage extends Component {
    render() {
        return (
            <Image src="/static/images/Tarik_Eshaq_Image.jpg" alt="" />
        )
    }
}
