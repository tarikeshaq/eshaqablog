import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Router from 'next/router';
import styled from 'styled-components';

const BlogCard = styled(Card)`
  width: 18rem;
  cursor: pointer;
  text-align: center;
  margin: auto;
`;

export default class ThumbnailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  onClick() {
    const { id } = this.state;
    Router.push(`/posts?postId=${id}`);
  }

  render() {
    const { children } = this.props;
    return (
      <BlogCard onClick={() => { this.onClick(); }}>
        {children}
      </BlogCard>
    );
  }
}

ThumbnailContainer.defaultProps = {
  children: React.createElement('div'),
};

ThumbnailContainer.propTypes = {
  children: PropTypes.node,
};
