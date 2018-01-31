import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AboutMeText from './index';

storiesOf('AboutMeText', module)
.add('AboutMeText Component', () => <AboutMeText />);