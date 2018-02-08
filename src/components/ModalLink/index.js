import React from 'react';
import PropTypes from 'prop-types';

import { TextButton } from '../';

function ModalLink({ pageLink, repoLink }) {
  return (
    <ul className="d-flex justify-content-around">
      <li>
        <a href={pageLink} target="_blank" className="ModalLink_Link">
          <TextButton text="Project Page" />
        </a>
      </li>
      <li>
        <a href={repoLink} target="_blank" className="ModalLink_Link">
          <TextButton text="Project Repo" />
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