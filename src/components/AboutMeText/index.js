import React from 'react';

import Title from '../Title';

import './AboutMeText.css';

function AboutMeText() {
  return (
    <section className="Portfolio_AboutMeText">
      <Title tagName="h3" content="About Me" className="AboutMeText_Heading mb-4" />
      <p className="AboutMeText_Main">
        새로운 기술을 배우는 것을 좋아하는 웹 프론트엔드 개발자입니다.
        JavaScript와 JavaScript로 구현한 기술을 좋아합니다.
        React.js, Vue.js 같은 웹 프론트엔드 프레임워크에 관심이 많습니다.
        JavaScript 기반 백엔드 플랫폼인 Node.js 기술에도 흥미가 많습니다.
        React-Native와 Android개발을 동시에 공부하면서 모바일 앱 개발을 공부하고 있습니다.
        배운 것을 이용해 프로젝트 진행하기를 좋아합니다.
      </p>
    </section>
  );
}

export default AboutMeText;