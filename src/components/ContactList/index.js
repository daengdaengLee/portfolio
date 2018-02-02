import React from 'react';

import ContactButton from '../ContactButton';
import contactInfo from './contactInfo';

function ContactList() {
  return (
    <ul className="list-inline">
      {contactInfo.map((info) => (
        <li key={info.id} className="list-inline-item mx-2">
          <ContactButton
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