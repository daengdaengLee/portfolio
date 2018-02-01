import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MenuButton from './index';

storiesOf('MenuButton', module)
.addDecorator((story) => (
  <div style={{ width: '8rem', height: '4rem', marginTop: '3rem', marginLeft: '3rem'}}>
    {story()}
  </div>
))
.add('MenuButton Component Projects', () => <MenuButton
  menuName="Projects"
/>)
.add('MenuButton Component About', () => <MenuButton
  menuName="About"
/>)
.add('MenuButton Component Blog', () => <MenuButton
  menuName="Blog"
/>);