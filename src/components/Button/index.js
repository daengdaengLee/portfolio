import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button({ buttonName }) {
  return (
    <div className="Portfolio_Button rounded w-100 d-inline-flex justify-content-center align-items-center p-1">
      {buttonName}
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;