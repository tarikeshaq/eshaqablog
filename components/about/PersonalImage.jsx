import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInUp, fadeIn, merge } from 'react-animations';

const SlideAndFade = merge(slideInUp, fadeIn);
const SlideAnimation = keyframes`${SlideAndFade}`;


const Image = styled.img`
    width: 300px;
    height: 350px;
    border-radius: 100%;
    text-align: center;
    left: 42.5%;
    top: 35%;
    animation: 2s ${SlideAnimation};
`;

export default () => (
  <Image src="/static/images/Tarik_Eshaq_Image-min.JPG" alt="" />
);
