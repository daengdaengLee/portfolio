import React from 'react';

import Image from '../Image';
import AboutMeText from '../AboutMeText';

function AboutMe() {
  return (
    <div className="row mx-0">
      <div className="col-md-4 p-4 d-inline-flex justify-content-center align-items-center">
        <Image
          src="https://user-images.githubusercontent.com/30795415/35600809-30b8806a-0673-11e8-984e-a259f5aa43e4.jpg"
          altText="프로필 이미지"
          rounded="rounded"
        />
      </div>
      <div className="col-md-8 p-4 d-inline-flex justify-content-center align-items-center">
        <AboutMeText />
      </div>
    </div>
  );
}

export default AboutMe;