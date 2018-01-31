import React from 'react';

import AboutMe from '../AboutMe';
import AboutSkills from '../AboutSkills';
import './AboutPage.css';

function AboutPage() {
  return (
    <section className="Portfolio_AboutPage">
      <h2 className="heading text-center py-4">
        About
      </h2>
      <div className="mb-4">
        <AboutMe />
      </div>
      <AboutSkills />
    </section>
  );
}

export default AboutPage;