import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from '../../../ProjectCard/ProjectDesc/ProjectTitle/ProjectTitle';
import ProjectLink from '../../../ProjectCard/ProjectDesc/ProjectLink/ProjectLink';

import './ProjectModalDesc.css';

function ProjectModalDesc({ title, desc, pageLink, repoLink }) {
  return (
    <div className="Portfolio_ProjectModalDesc p-4">
      <div className="mb-4">
        <ProjectTitle projectTitle={title} />
      </div>
      <div className="desc mb-4">
        {desc}
      </div>
      <ProjectLink
        pageLink={pageLink}
        repoLink={repoLink}
      />
    </div>
  );
}

ProjectModalDesc.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default ProjectModalDesc;