import React from 'react';

import Image from '../Image';
import './Avatar.css';

function Avatar() {
  return (
    <div className="Portfolio_Avatar rounded-circle p-2">
      <Image 
        src="https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg"
        altText="프로필 이미지"
        rounded="rounded-circle"
      />
    </div>
  );
}

export default Avatar;