import React from 'react';

import AboutMe from '../AboutMe';
import AboutSkills from '../AboutSkills';
import Title from '../Title';
import './AboutPage.css';

function AboutPage() {
  return (
    <section className="Portfolio_AboutPage">
      <div className="text-center py-4">
        <Title tagName="h2" content="About" size="2rem" />
      </div>
      <div className="mb-4">
        <AboutMe />
      </div>
      <AboutSkills />
    </section>
  );
}

export default AboutPage;