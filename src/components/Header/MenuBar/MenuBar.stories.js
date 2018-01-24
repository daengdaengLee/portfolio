import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MenuBar from './MenuBar';

storiesOf('MenuBar', module)
.addDecorator((story) => (
  <div className="container">
    {story()}
  </div>
))
.add('MenuBar Component', () => <MenuBar />);