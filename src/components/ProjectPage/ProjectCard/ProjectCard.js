import React from 'react';
import PropTypes from 'prop-types';
import ProjectDesc from './ProjectDesc/ProjectDesc';
import Thumbnail from './Thumbnail/Thumbnail';
import './ProjectCard.css';

function ProjectCard({ imgURL, altText, title, desc, repoLink, pageLink }) {
  return (
    <section className="Portfolio_ProjectCard row mx-0">
      <div className="col-md-6 thumbnail">
        <Thumbnail
          imgURL={imgURL}
          altText={altText}
        />
      </div>
      <div className="col-md-6 d-inline-flex align-items-center">
        <ProjectDesc
          title={title}
          desc={desc}
          repoLink={repoLink}
          pageLink={pageLink}
        />
      </div>
    </section>
  );
}

ProjectCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
};

export default ProjectCard;