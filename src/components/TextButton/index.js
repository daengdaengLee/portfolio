import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './TextButton.css';

function TextButton({ text, className, ...remainProps }) {
  const ownClassName = 'Portfolio_TextButton rounded';
  return (
    <Button className={className ? `${ownClassName} ${className}` : ownClassName} {...remainProps}>
      {text}
    </Button>
  );
}

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextButton;