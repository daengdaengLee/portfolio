import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';

import './ProjectTitle.css';

function ProjectTitle({ projectTitle }) {
  return (
    <Title tagName="h3" content={projectTitle} className="Portfolio_ProjectTitle" />
  );
}

ProjectTitle.propTypes = {
  projectTitle: PropTypes.string.isRequired,
};

export default ProjectTitle;