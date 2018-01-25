import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../../ProjectCard/Thumbnail/Thumbnail';
import ProjectModalDesc from './ProjectModalDesc/ProjectModalDesc';

function ProjectModalContent({ imgURL, altText, title, desc, pageLink, repoLink }) {
  return (
    <section>
      <Thumbnail
        imgURL={imgURL}
        altText={altText}
      />
      <ProjectModalDesc
        title={title}
        desc={desc}
        pageLink={pageLink}
        repoLink={repoLink}
      />
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