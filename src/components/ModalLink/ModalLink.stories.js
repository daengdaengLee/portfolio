import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ModalLink from './index';

storiesOf('ModalLink', module)
.add('ModalLink Component', () => <ModalLink
  pageLink="https://daengdaenglee.github.io/portfolio"
  repoLink="https://github.com"
/>);