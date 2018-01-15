import React from 'react';
import './Menu.css';

function Menu({ menuName }) {
  return (
    <div className="Portfolio_Menu rounded w-100 h-100 d-inline-flex justify-content-center align-items-center">
      {menuName}
    </div>
  );
}

export default Menu;