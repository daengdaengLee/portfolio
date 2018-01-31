import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AboutPage from './index';

storiesOf('AboutPage', module)
.addDecorator((story) => (
  <div className="container">
    {story()}
  </div>
))
.add('AboutPage Component', () => <AboutPage />);