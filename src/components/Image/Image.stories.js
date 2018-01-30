import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Image from './Image';

storiesOf('Image', module)
.add('Image Component rounded', () => <Image
  src="https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg"
  altText="프로필 이미지"
  rounded="rounded"
/>)
.add('Image Component rounded-top', () => <Image
src="https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg"
altText="프로필 이미지"
rounded="rounded-top"
/>)
.add('Image Component rounded-right', () => <Image
src="https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg"
altText="프로필 이미지"
rounded="rounded-right"
/>)
.add('Image Component rounded-bottom', () => <Image
src="https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg"
altText="프로필 이미지"
rounded="rounded-bottom"
/>)
.add('Image Component rounded-left', () => <Image
src="https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg"
altText="프로필 이미지"
rounded="rounded-left"
/>)
.add('Image Component rounded-circle', () => <Image
src="https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg"
altText="프로필 이미지"
rounded="rounded-circle"
/>)
.add('Image Component rounded-0', () => <Image
src="https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg"
altText="프로필 이미지"
rounded="rounded-0"
/>);