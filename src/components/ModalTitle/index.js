import React from 'react';
import PropTypes from 'prop-types';

import { Title, CloseButton } from '../';

import './ModalTitle.css';

function ModalTitle({ content, onRequestClose }) {
  return (
    <div className="Portfolio_ModalTitle d-flex justify-content-between">
      <Title tagName="h4" content={content} className="ModalTitle_Title" />
      <div onClick={onRequestClose} className="d-inline-flex align-items-center">
        <CloseButton />
      </div>
    </div>
  );
}

ModalTitle.propTypes = {
  content: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ModalTitle;