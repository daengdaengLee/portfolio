import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from './Header';

storiesOf('Header', module)
.addDecorator((story) => (
  <div className="container">
    {story()}
  </div>
))
.add('Header Component', () => <Header />);