import React from 'react';
import PropTypes from 'prop-types';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGithubAlt from 'react-icons/lib/fa/github-alt';
import './ContactButton.css';

const components = {
  FaFacebook,
  FaGithubAlt,
};

function ContactButton({ tagName, iconDesc, linkURL }) {
  const TagName = components[tagName];
  return (
    <a
      href={linkURL}
      target="_blank"
      className="Portfolio_ContactButton"
    >
      <TagName />
      <span className="Label">{iconDesc}</span>
    </a>
  );
}

ContactButton.prototype = {
  tagName: PropTypes.string.isRequired,
  iconDesc: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired,
};

export default ContactButton;
