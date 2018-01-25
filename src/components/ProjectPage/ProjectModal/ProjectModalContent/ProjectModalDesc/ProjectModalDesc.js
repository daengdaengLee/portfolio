import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from '../../../ProjectCard/ProjectDesc/ProjectTitle/ProjectTitle';
import ProjectLink from '../../../ProjectCard/ProjectDesc/ProjectLink/ProjectLink';

import './ProjectModalDesc.css';

function ProjectModalDesc({ title, desc, pageLink, repoLink }) {
  return (
    <div className="Portfolio_ProjectModalDesc">
      <ProjectTitle projectTitle={title} />
      <div className="desc">
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