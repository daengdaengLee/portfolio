import React from 'react';
import PropTypes from 'prop-types';

function Title({ tagName, content, size, weight, color, height, className }) {
  const MyHeader = tagName;
  const myStyle = {
    fontSize: size || null,
    fontWeight: weight || null,
    color: color || null,
    lineHeight: height || null,
  };
  return (
    <MyHeader style={myStyle} className={className}>
      {content}
    </MyHeader>
  );
}

Title.propTypes = {
  tagName: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  size: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  lineHeight: PropTypes.string,
  className: PropTypes.string,
};

export default Title;