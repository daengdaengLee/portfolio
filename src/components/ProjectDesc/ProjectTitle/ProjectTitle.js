import React from 'react';
import PropTypes from 'prop-types';
import './ProjectTitle.css';

function ProjectTitle({ projectTitle, className }) {
  const localClassName = "Portfolio_ProjectTitle";
  const componentClassName = className ? `${localClassName} ${className}` : localClassName;
  return (
    <h3 className={componentClassName}>{projectTitle}</h3>
  );
}

ProjectTitle.propTypes = {
  projectTitle: PropTypes.string.isRequired,
};

export default ProjectTitle;