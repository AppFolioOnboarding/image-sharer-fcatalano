import PropTypes from 'prop-types';
import React from 'react';

export default function Copyright(props) {
  return (
    <span>{props.message}</span>
  );
}

Copyright.propTypes = {
  message: PropTypes.string.isRequired
};
