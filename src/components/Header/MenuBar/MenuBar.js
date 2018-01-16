import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu/Menu';

function MenuBar({ className }) {
  const localClassName = "row justify-content-center w-100";
  const componentClassName = className ? `${localClassName} ${className}` : localClassName;
  return (
    <ul className={componentClassName}>
      <li className="col-3 col-md-2">
        <Menu menuName="Projects" />
      </li>
      <li className="col-3 col-md-2">
        <Menu menuName="About" />
      </li>
      <li className="col-3 col-md-2">
        <Menu menuName="Blog" />
      </li>
    </ul>
  );
}

MenuBar.propTypes = {
  className: PropTypes.string,
};

export default MenuBar;