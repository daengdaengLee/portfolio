import React from 'react';
import './Menu.css';

function Menu({ menuName }) {
  return (
    <div className="Portfolio_Menu">
      {menuName}
    </div>
  );
}

export default Menu;