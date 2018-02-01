import React from 'react';

import footerInfo from './footerInfo';

import './Footer.css';

function Footer() {
  return (
    <footer className="Portfolio_Footer pb-5">
      <p className="Footer_Text text-center">
        Coded by <a href={footerInfo.userLink} target="_blank" className="Footer_Link">KunhoLee</a>.<br />
        You can see the code from <a href={footerInfo.codeRepoLink} target="_blank" className="Footer_Link">here</a>!
      </p>
    </footer>
  );
}

export default Footer;