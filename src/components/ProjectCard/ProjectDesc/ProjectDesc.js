import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from './ProjectTitle/ProjectTitle';
import ProjectSynopsis from './ProjectSynopsis/ProjectSynopsis';

function ProjectDesc({ title, desc }) {
  return (
    <div className="Portfolio_ProjectDesc p-4">
      <div className="mb-4">
        <ProjectTitle projectTitle={title} />
      </div>
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