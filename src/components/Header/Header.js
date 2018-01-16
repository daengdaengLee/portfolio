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
      <PageTitle className="my-5" />
      <ContactList />
      <MenuBar className="mt-5" />
    </header>
  );
}

export default Header;