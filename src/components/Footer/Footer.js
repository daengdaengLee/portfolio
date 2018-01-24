import React from 'react';

import footerInfo from './footerInfo';

import './Footer.css';

function Footer() {
  return (
    <footer className="Portfolio_Footer pb-5">
      <p className="FooterText text-center">
        Coded by <a href={footerInfo.userLink} target="_blank" className="FooterLink">KunhoLee</a>.<br />
        You can see the code from <a href={footerInfo.codeRepoLink} target="_blank" className="FooterLink">here</a>!
      </p>
    </footer>
  );
}

export default Footer;