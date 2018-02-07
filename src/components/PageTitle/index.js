import React from 'react';
import PropTypes from 'prop-types';

import { Title } from '../';

import './PageTitle.css';

function PageTitle() {
  const content = <span>Hi, I'm <strong className="PageTitle_Highlight">Kunho Lee</strong>.<br />Are you looking for a <strong className="PageTitle_Highlight">web developer</strong>? PICK ME!</span>;
  return (
    <Title tagName="h1" content={content} className="Portfolio_PageTitle" />
  );
}

PageTitle.propTypes = {
  className: PropTypes.string,
};

export default PageTitle;