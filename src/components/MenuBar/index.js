import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../Button';

import './MenuBar.css';

function MenuBar() {
  return (
    <ul className="Portfolio_MenuBar row justify-content-center w-100 mx-0">
      <li className="col-3 col-md-2">
        <Link to="/portfolio" className="MenuBar_Link"><Button buttonName="Projects" /></Link>
      </li>
      <li className="col-3 col-md-2">
        <Link to="/portfolio/about" className="MenuBar_Link"><Button buttonName="About" /></Link>
      </li>
      <li className="col-3 col-md-2">
        <a href="https://daengdaenglee.github.io/" target="_blank" rel="noopener noreferrer" className="MenuBar_Link"><Button buttonName="Blog" /></a>
      </li>
    </ul>
  );
}

MenuBar.propTypes = {
  className: PropTypes.string,
};

export default MenuBar;