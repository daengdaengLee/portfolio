import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from '../Thumbnail';
import ModalTitle from '../ModalTitle';
import ProjectLink from '../ProjectLink';

function ProjectModalContent({ imgURL, altText, title, desc, pageLink, repoLink }) {
  return (
    <section className="d-flex flex-column align-items-center">
      <div className="my-5">
        <ModalTitle content={title} />
      </div>
      <div className="w-75">
        <Thumbnail
          imgURL={imgURL}
          altText={altText}
        />
      </div>
      <div className="my-5">
        <ProjectLink
          pageLink={pageLink}
          repoLink={repoLink}
        />
      </div>
      <p className="w-75 mb-5">
        {desc}
      </p>
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
};

export default ProjectModalContent;