import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CloseButton from './index';

storiesOf('CloseButton', module)
.add('CloseButton Component', () => <CloseButton />);