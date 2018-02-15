import React from 'react';
import PropTypes from 'prop-types';

import TextButton from '../TextButton';

function ModalLink({ pageLink, repoLink, className }) {
  const ownClassName = 'd-flex justify-content-around';
  return (
    <ul className={className ? `${ownClassName} ${className}` : ownClassName}>
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