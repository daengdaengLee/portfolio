import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Thumbnail from './Thumbnail';

storiesOf('Thumbnail', module)
.add('Thumbnail Component', () => <Thumbnail />);