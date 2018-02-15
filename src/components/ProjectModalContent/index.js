import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from '../Thumbnail';
import ModalTitle from '../ModalTitle';
import ModalLink from '../ModalLink';
import TextButton from '../TextButton';

import './ProjectModalContent.css';

function ProjectModalContent({ imgURL, altText, title, desc, pageLink, repoLink, onRequestClose }) {
  return (
    <section className="Portfolio_ProjectModalContent p-3 p-md-5">
      <div className="mb-3 mb-md-5">
        <ModalTitle content={title} onRequestClose={onRequestClose} />
      </div>
      <div className="row mx-0">
        <div className="col-md-6 mb-3 mb-md-0">
          <Thumbnail
            imgURL={imgURL}
            altText={altText}
          />
        </div>
        <div className="col-md-6 py-3">
          <ModalLink
            pageLink={pageLink}
            repoLink={repoLink}
            className="mb-3 mb-3 mb-md-5"
          />
          <p className="ProjectModalContent_Desc">
            {desc}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3 mt-md-5">
        <TextButton text="Close" className="w-25" onClick={onRequestClose} />
      </div>
    </section>
  );
}

ProjectModalContent.propTypes = {
  imgURL: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ProjectModalContent;