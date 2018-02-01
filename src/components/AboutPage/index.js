import React from 'react';

import AboutMe from '../AboutMe';
import AboutSkills from '../AboutSkills';
import Title from '../Title';

function AboutPage() {
  return (
    <section className="Portfolio_AboutPage">
      <Title tagName="h2" content="About" size="2rem" className="text-center py-4" />
      <div className="mb-4">
        <AboutMe />
      </div>
      <AboutSkills />
    </section>
  );
}

export default AboutPage;