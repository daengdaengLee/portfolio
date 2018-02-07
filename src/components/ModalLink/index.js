import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../';

import './ModalLink.css';

function ModalLink({ pageLink, repoLink }) {
  return (
    <ul className="Portfolio_ModalLink row mx-0">
      <li className="col-md-6 mb-3 mb-md-0">
        <a href={pageLink} target="_blank" className="ModalLink_Link">
          <Button buttonName="Project Page" />
        </a>
      </li>
      <li className="col-md-6">
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