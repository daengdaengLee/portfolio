import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { BrowserRouter } from 'react-router-dom';

import MenuBar from './MenuBar';

storiesOf('MenuBar', module)
.addDecorator((story) => (
  <BrowserRouter>
    <div className="container">
      {story()}
    </div>
  </BrowserRouter>
))
.add('MenuBar Component', () => <MenuBar />);