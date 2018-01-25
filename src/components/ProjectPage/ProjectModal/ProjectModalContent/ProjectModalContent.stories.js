import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProjectModalContent from './ProjectModalContent';

storiesOf('ProjectModalContent', module)
.addDecorator((story) => (
  <div style={{ width: '24rem', margin: '5rem' }}>
    {story()}
  </div>
))
.add('ProjectModalContent Component', () => <ProjectModalContent
  imgURL="https://user-images.githubusercontent.com/30795415/33804319-b2564816-dde5-11e7-8d4a-60fc12d68898.jpg"
  altText="Web Calculator Thumbnail Image"
/>);