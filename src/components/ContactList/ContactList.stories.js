import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ContactList from './index';

storiesOf('ContactList', module)
.addDecorator((story) => (
  <div style={{ width: '100%', height: '5rem', marginTop: '3rem', marginLeft: '3rem'}}>
    {story()}
  </div>
))
.add('ContactList Component', () => <ContactList />);