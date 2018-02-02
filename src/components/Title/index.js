import React from 'react';
import PropTypes from 'prop-types';

function Title({ tagName, content, className }) {
  const MyHeader = tagName;
  return (
    <MyHeader className={className}>
      {content}
    </MyHeader>
  );
}

Title.propTypes = {
  tagName: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
};

export default Title;