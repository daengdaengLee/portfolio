import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from '../ProjectTitle';
import ProjectSynopsis from '../ProjectSynopsis';
import ProjectLink from '../ProjectLink';

function ProjectDesc({ title, desc, pageLink, repoLink }) {
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
        pageLink={pageLink}
        repoLink={repoLink}
      />
    </div>
  );
}

ProjectDesc.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default ProjectDesc;