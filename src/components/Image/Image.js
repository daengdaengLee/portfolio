import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, altText, rounded }) {
  return (
    <div>
      <p>{src}</p>
      <p>{altText}</p>
      <p>{rounded}</p>
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  rounded: PropTypes.string,
};

export default Image;