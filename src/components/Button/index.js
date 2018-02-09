import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, className, children, ...remainProps }) {
  return (
    <button type={type} className={className} {...remainProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;