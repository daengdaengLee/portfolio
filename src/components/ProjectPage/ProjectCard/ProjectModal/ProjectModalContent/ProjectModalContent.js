import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../../Thumbnail/Thumbnail';
import ProjectModalDesc from './ProjectModalDesc/ProjectModalDesc';

function ProjectModalContent({ imgURL, altText, title, desc, pageLink, repoLink }) {
  return (
    <section className="row mx-0 p-4">
      <div className="col-md-6 py-3">
        <Thumbnail
          imgURL={imgURL}
          altText={altText}
        />
      </div>
      <div className="col-md-6">
        <ProjectModalDesc
          title={title}
          desc={desc}
          pageLink={pageLink}
          repoLink={repoLink}
        />
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
};

export default ProjectModalContent;