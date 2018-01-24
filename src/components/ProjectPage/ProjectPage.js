import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard/ProjectCard';

function ProjectPage({ projectInfo }) {
  return (
    <section>
      <h2>Projects</h2>
      <div className="row mx-0">
        {projectInfo.map(project => (
          <div className="col-md-6 my-5">
            <ProjectCard
              key={project.id}
              imgURL={project.imgURL}
              altText={project.altText}
              title={project.title}
              desc={project.desc}
            />
          </div>
        ))}
      </div>
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