import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Menu from './Menu';

storiesOf('Menu', module)
.addDecorator((story) => (
  <div style={{ width: '8rem', height: '4rem', marginTop: '3rem', marginLeft: '3rem'}}>
    {story()}
  </div>
))
.add('Menu Component Projects', () => <Menu
  menuName="Projects"
/>)
.add('Menu Component About', () => <Menu
  menuName="About"
/>)
.add('Menu Component Blog', () => <Menu
  menuName="Blog"
/>);