import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProjectTitle from './index';

storiesOf('ProjectTitle', module)
.add('ProjectTitle Component', () => <ProjectTitle
  projectTitle="Web Calculator"
/>);