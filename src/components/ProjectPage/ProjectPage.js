import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard/ProjectCard';

function ProjectPage({ projectInfo }) {
  return (
    <section>
      <h2>Projects</h2>
      {JSON.stringify(projectInfo)}
    </section>
  );
}

ProjectPage.propTypes = {
  projectInfo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgURL: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })).isRequired
};

export default ProjectPage;