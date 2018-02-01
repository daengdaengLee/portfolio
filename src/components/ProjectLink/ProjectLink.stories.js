import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProjectLink from './index';

storiesOf('ProjectLink', module)
.add('ProjectLink Component', () => <ProjectLink
  pageLink="https://daengdaenglee.github.io/portfolio"
  repoLink="https://github.com"
/>);