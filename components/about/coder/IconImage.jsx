import React from 'react';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const Icon = styled(Image)`
    width: 10%;
    height: 10%;
    padding-left: 1%;
`;

export default function IconImage(props) {
  return (
    <Icon {...props} />
  );
}
