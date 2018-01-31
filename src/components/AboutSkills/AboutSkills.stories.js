import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AboutSkills from './index';

storiesOf('AboutSkills', module)
.addDecorator((story) => (
  <div className="container">
    {story()}
  </div>
))
.add('AboutSkills Component', () => <AboutSkills />);