import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import CloseButton from '../CloseButton';

import './ModalTitle.css';

function ModalTitle({ content, onRequestClose }) {
  return (
    <div className="Portfolio_ModalTitle d-flex justify-content-between align-items-center">
      <Title tagName="h4" content={content} className="ModalTitle_Title" />
      <CloseButton onClick={onRequestClose} />
    </div>
  );
}

ModalTitle.propTypes = {
  content: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ModalTitle;