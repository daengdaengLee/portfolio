import React from 'react';

import ContactButton from './ContactButton/ContactButton';

import contactInfo from './contactInfo';

function ContactList() {
  return (
    <ul className="list-inline">
      {contactInfo.map((info) => (
        <li className="list-inline-item mx-2">
          <ContactButton
            key={info.id}
            tagName={info.tagName}
            iconDesc={info.iconDesc}
            linkURL={info.linkURL}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;