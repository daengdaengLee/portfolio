import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './ModalLink.css';

function ModalLink({ pageLink, repoLink }) {
  return (
    <ul className="Portfolio_ModalLink w-100 d-flex justify-content-between flex-md-column justify-content-md-start">
      <li className="mb-md-3">
        <a href={pageLink} target="_blank" className="ModalLink_Link">
          <Button buttonName="Project Page" />
        </a>
      </li>
      <li>
        <a href={repoLink} target="_blank" className="ModalLink_Link">
          <Button buttonName="Project Repo" />
        </a>
      </li>
    </ul>
  );
}

ModalLink.propTypes = {
  pageLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default ModalLink;