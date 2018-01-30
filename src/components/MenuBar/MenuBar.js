import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Menu from '../Menu/Menu';

import './MenuBar.css';

function MenuBar() {
  return (
    <ul className="Portfolio_MenuBar row justify-content-center w-100 mx-0">
      <li className="col-3 col-md-2">
        <Link to="/portfolio" className="link"><Menu menuName="Projects" /></Link>
      </li>
      <li className="col-3 col-md-2">
        <Menu menuName="About" />
      </li>
      <li className="col-3 col-md-2">
        <a href="https://daengdaenglee.github.io/" target="_blank" rel="noopener noreferrer" className="link"><Menu menuName="Blog" /></a>
      </li>
    </ul>
  );
}

MenuBar.propTypes = {
  className: PropTypes.string,
};

export default MenuBar;