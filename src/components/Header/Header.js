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
      <PageTitle />
      <ContactList />
      <MenuBar />
    </header>
  );
}

export default Header;