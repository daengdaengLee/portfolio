import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Avatar from './Avatar';

storiesOf('Avatar', module).add('Avatar Component', () => <Avatar />);