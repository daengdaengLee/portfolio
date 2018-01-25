import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProjectLink from './ProjectLink';

storiesOf('ProjectLink', module)
.add('ProjectLink Component', () => <ProjectLink
/>);