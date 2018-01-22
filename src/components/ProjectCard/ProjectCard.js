import React from 'react';
import PropTypes from 'prop-types';
import ProjectDesc from './ProjectDesc/ProjectDesc';
import Thumbnail from './Thumbnail/Thumbnail';
import './ProjectCard.css';

function ProjectCard({ imgURL, altText, title, desc }) {
  return (
    <section className="Portfolio_ProjectCard row">
      <div className="col-md-5">
        <Thumbnail
          imgURL={imgURL}
          altText={altText}
        />
      </div>
      <div className="col-md-5">
        <ProjectDesc
          title={title}
          desc={desc}
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
};

export default ProjectCard;