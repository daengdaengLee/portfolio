import React from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook';
import './ContactButton.css';

const components = {
  FaFacebook,
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

export default ContactButton;
