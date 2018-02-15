import React from 'react';

import HeaderAvatar from '../HeaderAvatar';
import ContactList from '../ContactList';
import MenuBar from '../MenuBar';
import PageTitle from '../PageTitle';

function Header() {
  return (
    <header className="d-flex flex-column align-items-center">
      <HeaderAvatar />
      <div className="my-5">
        <PageTitle />
      </div>
      <ContactList />
      <div className="w-100 mt-5">
        <MenuBar />
      </div>
    </header>
  );
}

export default Header;