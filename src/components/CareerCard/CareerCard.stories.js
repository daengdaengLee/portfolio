import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CareerCard from './index';

storiesOf('CareerCard', module)
.addDecorator((story) => (
  <div className="container">
    {story()}
  </div>
))
.add('CareerCard Component', () => <CareerCard />);