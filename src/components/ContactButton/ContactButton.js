import React from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook';
import './ContactButton.css';

const components = {
  FaFacebook,
};

function ContactButton({ tagName }) {
  const TagName = components[tagName];
  return (
    <a
      href="https://google.com"
      target="_blank"
      className="Portfolio_ContactButton"
    >
      <TagName />
      <span className="Label">contact icon</span>
    </a>
  );
}

export default ContactButton;
