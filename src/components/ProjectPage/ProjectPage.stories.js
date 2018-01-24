import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProjectPage from './ProjectPage';
import projectInfo from './projectInfo';

storiesOf('ProjectPage', module)
// .addDecorator((story) => (
//   <div style={{ width: '24rem', margin: '5rem' }}>
//     {story()}
//   </div>
// ))
.add('ProjectPage Component', () => <ProjectPage
  projectInfo={projectInfo}
/>);