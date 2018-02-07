import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ProjectDesc, Thumbnail, ProjectModal } from '../';

import './ProjectCard.css';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }

  render() {
    const { imgURL, altText, title, desc, repoLink, pageLink } = this.props;
    const { isOpen } = this.state;
    const { _openModal, _closeModal } = this;
    return (
      <div>
        <section className="Portfolio_ProjectCard row mx-0" onClick={_openModal}>
          <div className="col-md-6 ProjectCard_Thumbnail">
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
        <ProjectModal
          isOpen={isOpen}
          contentLabel={title}
          onRequestClose={_closeModal}
          imgURL={imgURL}
          altText={altText}
          title={title}
          desc={desc}
          pageLink={pageLink}
          repoLink={repoLink}
        />
      </div>
    );
  }

  _openModal() {
    this.setState({ isOpen: true });
  }

  _closeModal() {
    this.setState({ isOpen: false });
  }
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