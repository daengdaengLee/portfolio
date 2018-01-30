import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, altText, rounded }) {
  const classes = `${rounded} w-100`;
  return (
    <img
      src={src}
      alt={altText}
      className={classes}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  rounded: PropTypes.string,
};

export default Image;