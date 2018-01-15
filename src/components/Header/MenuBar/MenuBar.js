import React from 'react';

import Menu from './Menu/Menu';

function MenuBar() {
  return (
    <ul className="row justify-content-center">
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

export default MenuBar;