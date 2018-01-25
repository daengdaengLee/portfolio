import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from './ProjectTitle/ProjectTitle';
import ProjectSynopsis from './ProjectSynopsis/ProjectSynopsis';
import ProjectLink from './ProjectLink/ProjectLink';

function ProjectDesc({ title, desc }) {
  return (
    <div className="Portfolio_ProjectDesc p-4">
      <div className="mb-4">
        <ProjectTitle projectTitle={title} />
      </div>
      <div className="mb-4">
        <ProjectSynopsis
          projectDesc={desc}
        />
      </div>
      <ProjectLink
        pageLink="https://google.com"
        repoLink="https://github.com"
      />
    </div>
  );
}

ProjectDesc.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ProjectDesc;