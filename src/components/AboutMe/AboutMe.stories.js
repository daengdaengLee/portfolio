import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AboutMe from './index';

storiesOf('AboutMe', module)
.add('AboutMe Component', () => <AboutMe />);