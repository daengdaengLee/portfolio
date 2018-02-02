import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from '../Thumbnail';
import ModalTitle from '../ModalTitle';
import ModalLink from '../ModalLink';

function ProjectModalContent({ imgURL, altText, title, desc, pageLink, repoLink }) {
  return (
    <section className="d-flex flex-column align-items-center">
      <div className="my-5">
        <ModalTitle content={title} />
      </div>
      <div className="mb-5 w-50">
        <ModalLink
          pageLink={pageLink}
          repoLink={repoLink}
        />
      </div>
      <div className="w-75">
        <Thumbnail
          imgURL={imgURL}
          altText={altText}
        />
      </div>
      <p className="w-75 mt-5">
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