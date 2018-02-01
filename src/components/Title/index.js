import React from 'react';
import PropTypes from 'prop-types';

function Title({ tagName, content, size, weight, color, height }) {
  const MyHeader = tagName;
  const myStyle = {
    fontSize: size || 'inherit',
    fontWeight: weight || 'inherit',
    color: color || 'inherit',
    lineHeight: height || 'inherit',
  };
  return (
    <MyHeader style={myStyle}>
      {content}
    </MyHeader>
  );
}

Title.propTypes = {
  tagName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  size: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
};

export default Title;