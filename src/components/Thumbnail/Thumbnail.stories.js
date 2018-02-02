import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Thumbnail from './index';

storiesOf('Thumbnail', module)
.addDecorator((story) => (
  <div style={{ width: '5rem', margin: '5rem', border: '1px solid red' }}>
    {story()}
  </div>
))
.add('Thumbnail Component', () => <Thumbnail
  imgURL="https://user-images.githubusercontent.com/30795415/33804319-b2564816-dde5-11e7-8d4a-60fc12d68898.jpg"
  altText="web calculator thumbnail image"
/>);