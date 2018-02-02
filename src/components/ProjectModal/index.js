import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import ProjectModalContent from '../ProjectModalContent';
import Button from '../Button';

import './ProjectModal.css';

ReactModal.setAppElement('#root');

class ProjectModal extends Component {
  
  componentDidUpdate() {
    const { isOpen } = this.props;
    const overlay = document.querySelector('.Portfolio_ProjectModal_Overlay');
    if(isOpen) overlay.scrollTop = 0;
  }

  render() {
    const {
      isOpen,
      contentLabel,
      onRequestClose,
      imgURL,
      altText,
      title,
      desc,
      pageLink,
      repoLink,
    } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel={contentLabel}
        onRequestClose={onRequestClose}
        bodyOpenClassName="modal-open"
        overlayClassName="Portfolio_ProjectModal_Overlay"
        className="Portfolio_ProjectModal_Content"
      >
        <ProjectModalContent
          imgURL={imgURL}
          altText={altText}
          title={title}
          desc={desc}
          pageLink={pageLink}
          repoLink={repoLink}
        />
        <div className="d-flex justify-content-center my-3 my-md-5">
          <div className="w-50" onClick={onRequestClose}>
            <Button buttonName="Close" />
          </div>
        </div>
      </ReactModal>
    );
  }
  
}

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  contentLabel: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  imgURL: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default ProjectModal;