import { configure } from '@storybook/react';


// src 폴더 아래의 모든 *.stories.js 파일을 로드한다.
const req = require.context(
  '../src',
  true,
  /\.stories\.(js|jsx)$/,
);

function loadStories() {
  req.keys().forEach(filename => {
    req(filename)
  })
}

configure(loadStories, module);
