import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

function Footer({ userLink, codeRepoLink }) {
  return (
    <footer className="Portfolio_Footer">
      <p>
        Coded by <a href={userLink} target="_blank">KunhoLee</a>.<br />
        You can see the code from <a href={codeRepoLink} target="_blank">here</a>!
      </p>
    </footer>
  );
}

Footer.propTypes = {
  userLink: PropTypes.string.isRequired,
  codeRepoLink: PropTypes.string.isRequired,
};

export default Footer;