import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

function ProjectModal({ isOpen, contentLabel }) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={contentLabel}
    >
      ProjectModal Component
    </ReactModal>
  );
}

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  contentLabel: PropTypes.string.isRequired,
};

export default ProjectModal;