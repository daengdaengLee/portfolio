import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MenuBar from './MenuBar';

storiesOf('MenuBar', module)
.addDecorator((story) => (
  <div style={{ width: '8rem', height: '2rem', marginTop: '3rem', marginLeft: '3rem'}}>
    {story()}
  </div>
))
.add('MenuBar Component', () => <MenuBar />);