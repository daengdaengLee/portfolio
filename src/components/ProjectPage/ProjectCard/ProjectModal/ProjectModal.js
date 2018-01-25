import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import ProjectModalContent from './ProjectModalContent/ProjectModalContent';

function ProjectModal({ isOpen, contentLabel, imgURL, altText, title, desc, pageLink, repoLink }) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={contentLabel}
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
  imgURL: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default ProjectModal;