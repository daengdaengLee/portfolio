import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './index';

storiesOf('Button', module)
.addDecorator((story) => (
  <div style={{ width: '8rem', height: '4rem', marginTop: '3rem', marginLeft: '3rem'}}>
    {story()}
  </div>
))
.add('Button Component Projects', () => <Button
  buttonName="Projects"
/>)
.add('Button Component About', () => <Button
  buttonName="About"
/>)
.add('Button Component Blog', () => <Button
  buttonName="Blog"
/>);