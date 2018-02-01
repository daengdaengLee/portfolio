import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import './PageTitle.css';

function PageTitle() {
  const content = <span>Hi, I'm <strong className="highlight">Kunho Lee</strong>.<br />Are you looking for a <strong className="highlight">web developer</strong>? PICK ME!</span>;
  return (
    <Title tagName="h1" content={content} size="1.8rem" height="2.3rem" className="Portfolio_PageTitle" />
  );
}

PageTitle.propTypes = {
  className: PropTypes.string,
};

export default PageTitle;