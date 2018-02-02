import React from 'react';
import PropTypes from 'prop-types';

import './Thumbnail.css';

function Thumbnail({ imgURL, altText }) {
  return (
    <img
      src={imgURL}
      alt={altText}
      className="Portfolio_Thumbnail w-100 position-relative"
    />
  );
}

Thumbnail.propTypes = {
  imgURL: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
};

export default Thumbnail;