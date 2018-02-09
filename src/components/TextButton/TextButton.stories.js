import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TextButton from './index';

storiesOf('TextButton', module)
.add('TextButton Component', () => <TextButton
  text="TextButton"
/>);