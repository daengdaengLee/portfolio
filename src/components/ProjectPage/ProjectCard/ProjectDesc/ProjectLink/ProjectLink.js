import React from 'react';
import PropTypes from 'prop-types';

import './ProjectLink.css';

function ProjectLink({ pageLink, repoLink }) {
  return (
    <ul className="Portfolio_ProjectLink">
      <li className="my-1"><a href={pageLink} target="_blank" className="link">Project Page</a></li>
      <li><a href={repoLink} target="_blank" className="link">Project Repo</a></li>
    </ul>
  );
}

ProjectLink.propTypes = {
  pageLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default ProjectLink;