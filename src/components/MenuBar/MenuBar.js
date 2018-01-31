import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MenuButton from '../MenuButton/MenuButton';

import './MenuBar.css';

function MenuBar() {
  return (
    <ul className="Portfolio_MenuBar row justify-content-center w-100 mx-0">
      <li className="col-3 col-md-2">
        <Link to="/portfolio" className="link"><MenuButton menuName="Projects" /></Link>
      </li>
      <li className="col-3 col-md-2">
        <Link to="/portfolio/about" className="link"><MenuButton menuName="About" /></Link>
      </li>
      <li className="col-3 col-md-2">
        <a href="https://daengdaenglee.github.io/" target="_blank" rel="noopener noreferrer" className="link"><MenuButton menuName="Blog" /></a>
      </li>
    </ul>
  );
}

MenuBar.propTypes = {
  className: PropTypes.string,
};

export default MenuBar;