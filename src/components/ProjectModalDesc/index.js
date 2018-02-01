import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from '../ProjectTitle';
import ProjectLink from '../ProjectLink';

import './ProjectModalDesc.css';

function ProjectModalDesc({ title, desc, pageLink, repoLink }) {
  return (
    <div className="Portfolio_ProjectModalDesc p-md-4">
      <div className="mb-4">
        <ProjectTitle projectTitle={title} />
      </div>
      <div className="mb-4">
        <ProjectLink
          pageLink={pageLink}
          repoLink={repoLink}
        />
      </div>
      <div className="desc">
        {desc}
      </div>
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