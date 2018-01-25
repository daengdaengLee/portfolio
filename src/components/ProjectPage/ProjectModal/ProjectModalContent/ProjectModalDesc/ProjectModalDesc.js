import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from '../../../ProjectCard/ProjectDesc/ProjectTitle/ProjectTitle';

import './ProjectModalDesc.css';

function ProjectModalDesc({ title, desc }) {
  return (
    <div className="Portfolio_ProjectModalDesc">
      <ProjectTitle projectTitle={title} />
      <div className="desc">
        {desc}
      </div>
    </div>
  );
}

ProjectModalDesc.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ProjectModalDesc;