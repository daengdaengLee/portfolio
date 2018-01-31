import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DefinitionList from './index';

storiesOf('DefinitionList', module)
.addDecorator((story) => (
  <div className="container">
    {story()}
  </div>
))
.add('DefinitionList Component', () => <DefinitionList />);