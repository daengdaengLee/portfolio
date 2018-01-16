import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.css';

function PageTitle() {
  return (
    <h1 className="Portfolio_PageTitle">
      Hi, I'm <strong>Kunho Lee</strong>.<br />
      Are you looking for a <strong>web developer</strong>? PICK ME!
    </h1>
  );
}

PageTitle.propTypes = {
  className: PropTypes.string,
};

export default PageTitle;