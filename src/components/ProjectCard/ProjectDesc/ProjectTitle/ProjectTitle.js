import React from 'react';
import PropTypes from 'prop-types';
import './ProjectTitle.css';

function ProjectTitle({ projectTitle }) {
  return (
    <h3 className="Portfolio_ProjectTitle">{projectTitle}</h3>
  );
}

ProjectTitle.propTypes = {
  projectTitle: PropTypes.string.isRequired,
};

export default ProjectTitle;