import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DefinitionList from './index';

const dummyList = [
  {
    id: 1,
    listTerm: '1st - 1depth',
    listDesc: [
      {
        id: 1,
        listTerm: '1st - 2depth'
      },
      {
        id: 2,
        listTerm: '2nd - 2depth'
      },
      {
        id: 3,
        listTerm: '3rd - 2depth',
        listDesc: [
          {
            id: 1,
            listTerm: '1st - 3depth',
          },
          {
            id: 2,
            listTerm: '2nd - 3depth',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    listTerm: '2nd - 1depth',
    listDesc: [
      {
        id: 1,
        listTerm: '1st - 2depth'
      },
      {
        id: 2,
        listTerm: '2nd - 2depth'
      },
      {
        id: 3,
        listTerm: '3rd - 2depth',
        listDesc: [
          {
            id: 1,
            listTerm: '1st - 3depth',
          },
          {
            id: 2,
            listTerm: '2nd - 3depth',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    listTerm: '3rd - 1depth',
    listDesc: [
      {
        id: 1,
        listTerm: '1st - 2depth'
      },
      {
        id: 2,
        listTerm: '2nd - 2depth'
      },
      {
        id: 3,
        listTerm: '3rd - 2depth',
        listDesc: [
          {
            id: 1,
            listTerm: '1st - 3depth',
          },
          {
            id: 2,
            listTerm: '2nd - 3depth',
          },
        ],
      },
    ],
  },
];

storiesOf('DefinitionList', module)
.addDecorator((story) => (
  <div className="container">
    {story()}
  </div>
))
.add('DefinitionList Component', () => <DefinitionList listInfo={dummyList} />);