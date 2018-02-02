import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Card from './index';

storiesOf('Card', module)
.addDecorator((story) => (
  <div className="container">
    {story()}
  </div>
))
.add('Card Component', () => <Card
  left={<div className="w-100" style={{ backgroundColor: 'powderblue', color: 'white' }}>left</div>}
  right={<div className="w-100" style={{ backgroundColor: 'tomato', color: 'white' }}>right</div>}
/>);