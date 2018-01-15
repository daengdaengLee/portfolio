import React from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook';
import './ContactButton.css';

function ContactButton() {
  return (
    <a
      href="https://google.com"
      target="_blank"
      className="Portfolio_ContactButton"
    >
      <FaFacebook />
      <span className="Label">contact icon</span>
    </a>
  );
}

export default ContactButton;
