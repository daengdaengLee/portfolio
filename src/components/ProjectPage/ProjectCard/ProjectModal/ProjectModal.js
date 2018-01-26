import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import ProjectModalContent from './ProjectModalContent/ProjectModalContent';

ReactModal.setAppElement('#root');

function ProjectModal({ isOpen, contentLabel, onRequestClose, imgURL, altText, title, desc, pageLink, repoLink }) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
    >
      <ProjectModalContent
        imgURL={imgURL}
        altText={altText}
        title={title}
        desc={desc}
        pageLink={pageLink}
        repoLink={repoLink}
      />
    </ReactModal>
  );
}

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  contentLabel: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  imgURL: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default ProjectModal;