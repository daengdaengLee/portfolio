import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

function Menu({ menuName }) {
  return (
    <div className="Portfolio_Menu rounded w-100 d-inline-flex justify-content-center align-items-center">
      {menuName}
    </div>
  );
}

Menu.propTypes = {
  menuName: PropTypes.string.isRequired,
};

export default Menu;