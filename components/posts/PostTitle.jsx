import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleContainer = styled.h1`
margin: auto;
text-align: center;
font-weight: bold;
font-size: 2.5rem;
color: black;
`;
export default function PostTitle(props) {
  const { title } = props;
  return (
    <div>
      <TitleContainer>{title}</TitleContainer>
    </div>
  );
}

PostTitle.defaultProps = {
  title: '',
};

PostTitle.propTypes = {
  title: PropTypes.string,
};
