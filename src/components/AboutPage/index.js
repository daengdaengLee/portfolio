import React from 'react';

import AboutMe from '../AboutMe';
import './AboutPage.css';

function AboutPage() {
  return (
    <section className="Portfolio_AboutPage">
      <h2 className="heading text-center py-4">
        About
      </h2>
      <AboutMe />
    </section>
  );
}

export default AboutPage;