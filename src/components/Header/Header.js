import React from 'react';

import Avatar from './Avatar/Avatar';
import ContactList from './ContactList/ContactList';
import MenuBar from './MenuBar/MenuBar';
import PageTitle from './PageTitle/PageTitle';

import './Header.css';

function Header() {
  return (
    <header className="Portfolio_Header d-flex flex-column align-items-center">
      <Avatar />
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