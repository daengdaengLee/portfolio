import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import App from './index';

storiesOf('App', module)
.add('App Component', () => <App />);