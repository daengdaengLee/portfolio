import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProjectPage from './ProjectPage';

storiesOf('ProjectPage', module)
.addDecorator((story) => (
  <div className="container" style={{ margin: '2rem' }}>
    {story()}
  </div>
))
.add('ProjectPage Component', () => <ProjectPage />);