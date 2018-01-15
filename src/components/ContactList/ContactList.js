import React from 'react';

import ContactButton from './ContactButton/ContactButton';

const contactInfo = [
  {
    id: 1,
    tagName: 'FaGithubAlt',
    iconDesc: 'github icon',
    linkURL: 'https://github.com/daengdaengLee',
  },
  {
    id: 2,
    tagName: 'FaFacebook',
    iconDesc: 'facebook icon',
    linkURL: 'https://www.facebook.com/gunho.lee.566',
  },
  {
    id: 3,
    tagName: 'FaCodepen',
    iconDesc: 'codepen icon',
    linkURL: 'https://codepen.io/daengdaengLee/',
  },
  {
    id: 4,
    tagName: 'FaEnvelopeO',
    iconDesc: 'codepen icon',
    linkURL: 'mailto: gunho1020@gmail.com',
  },
];

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