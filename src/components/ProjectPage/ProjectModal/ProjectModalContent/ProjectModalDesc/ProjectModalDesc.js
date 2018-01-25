import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from '../../../ProjectCard/ProjectDesc/ProjectTitle/ProjectTitle';

function ProjectModalDesc({ title }) {
  return (
    <div>
      <ProjectTitle projectTitle={title} />
    </div>
  );
}

ProjectModalDesc.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProjectModalDesc;