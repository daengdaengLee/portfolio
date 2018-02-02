import React from 'react';

import Card from '../Card';
import Image from '../Image';

const left = (
  <Image
    src="https://user-images.githubusercontent.com/30795415/35715926-d15713e6-0818-11e8-9b81-0530cc412c5c.jpg"
    altText="커리어 이미지"
    rounded="rounded"  
  />
);
const right = (
  <p>
    당신과 함께 경력을 만들고 싶습니다.<br />
    호기심 많은 개발자가 필요하면 연락주세요!
  </p>
);

function CareerCard() {
  return (
    <Card
      left={left}
      right={right}
    />
  );
}

export default CareerCard;