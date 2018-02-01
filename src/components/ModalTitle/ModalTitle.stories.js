import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ModalTitle from './index';

storiesOf('ModalTitle', module)
.add('ModalTitle Component', () => <ModalTitle
  content="Web Calculator"
/>);