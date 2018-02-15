import React from 'react';

import Title from '../Title';

import './AboutMeText.css';

function AboutMeText() {
  return (
    <section className="Portfolio_AboutMeText">
      <Title tagName="h3" content="About Me" className="AboutMeText_Heading mb-4" />
      <p className="AboutMeText_Main">
        취미로 시작한 코딩에 푹 빠져버린 개발자입니다. 웹에서 동작하는 앱을 다룹니다.
      </p>
      <br />
      <p className="AboutMeText_Main">
        신기한 앱이 눈에 띄면 직접 만들어 봐야 직성이 풀립니다. 컴퓨터 공학이나 프로그래밍에 대한 전공 지식은 모르지만 만들고 싶은 앱을 만들기 위해 필요한 지식은 웹을 통해 폭넓게 수집합니다. 넘쳐나는 정보를 정리해서 큰 줄기를 보고 원리를 이해하려고 노력합니다.
      </p>
      <br />
      <p className="AboutMeText_Main">
        체력과 집중력이 좋아 매일 멈추지 않고 코딩할 수 있습니다.
      </p>
    </section>
  );
}

export default AboutMeText;