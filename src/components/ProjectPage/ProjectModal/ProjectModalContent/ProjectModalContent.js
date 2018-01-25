import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../../ProjectCard/Thumbnail/Thumbnail';

function ProjectModalContent({ imgURL, altText }) {
  return (
    <section>
      <Thumbnail
        imgURL={imgURL}
        altText={altText}
      />
    </section>
  );
}

ProjectModalContent.propTypes = {
  imgURL: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default ProjectModalContent;