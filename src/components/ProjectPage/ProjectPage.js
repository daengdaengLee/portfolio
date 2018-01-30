import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectInfo from './projectInfo';

import './ProjectPage.css';

function ProjectPage() {
  return (
    <section className="Portfolio_ProjectPage">
      <h2 className="headingText text-center py-4">Projects</h2>
      <div className="row mx-0">
        {projectInfo.map(project => (
          <div key={project.id} className="col-md-6 my-5">
            <ProjectCard
              imgURL={project.imgURL}
              altText={project.altText}
              title={project.title}
              desc={project.desc}
              pageLink={project.pageLink}
              repoLink={project.repoLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;