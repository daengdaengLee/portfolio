import React from 'react';

import ProjectCard from '../ProjectCard';
import Title from '../Title';
import projectInfo from './projectInfo';

function ProjectPage() {
  return (
    <section className="Portfolio_ProjectPage">
      <Title tagName="h2" content="Projects" size="2rem" className="text-center py-4" />
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