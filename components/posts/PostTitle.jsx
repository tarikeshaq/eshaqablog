import React from 'react';
import PropTypes from 'prop-types';

export default function PostTitle(props) {
  const { title } = props;
  return (
    <div>
      <h5>{title}</h5>
    </div>
  );
}

PostTitle.defaultProps = {
  title: '',
};

PostTitle.propTypes = {
  title: PropTypes.string,
};
