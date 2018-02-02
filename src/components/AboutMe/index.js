import React from 'react';

import Card from '../Card';
import Image from '../Image';
import AboutMeText from '../AboutMeText';

const left = (
  <Image
    src="https://user-images.githubusercontent.com/30795415/35600809-30b8806a-0673-11e8-984e-a259f5aa43e4.jpg"
    altText="프로필 이미지"
    rounded="rounded"
  />
);
const right = <AboutMeText />;

function AboutMe() {
  return <Card left={left} right={right} />;
}

export default AboutMe;