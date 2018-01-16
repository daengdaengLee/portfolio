import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from './ProjectTitle/ProjectTitle';
import ProjectSynopsis from './ProjectSynopsis/ProjectSynopsis';
import './ProjectDesc.css';

function ProjectDesc({ title, desc }) {
  return (
    <div className="Portfolio_ProjectDesc p-4">
      <ProjectTitle
        projectTitle={title}
      />
      <ProjectSynopsis
        projectDesc={desc}
      />
    </div>
  );
}

ProjectDesc.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ProjectDesc;