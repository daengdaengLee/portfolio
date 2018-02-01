import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';

import './ModalTitle.css';

function ModalTitle({ content }) {
  return (
    <Title tagName="h4" content={content} className="Portfolio_ModalTitle text-center display-4" />
  );
}

ModalTitle.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ModalTitle;