import React from 'react';
import PropTypes from 'prop-types';

import './MenuButton.css';

function MenuButton({ menuName }) {
  return (
    <div className="Portfolio_MenuButton rounded w-100 d-inline-flex justify-content-center align-items-center">
      {menuName}
    </div>
  );
}

MenuButton.propTypes = {
  menuName: PropTypes.string.isRequired,
};

export default MenuButton;