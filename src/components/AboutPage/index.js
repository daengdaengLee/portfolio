import React from 'react';

import AboutMe from '../AboutMe';
import AboutSkills from '../AboutSkills';
import Title from '../Title';
import CareerCard from '../CareerCard';

import './AboutPage.css';

function AboutPage() {
  return (
    <section className="Portfolio_AboutPage">
      <Title tagName="h2" content="About" className="AboutPage_Heading text-center py-4" />
      <div className="mb-4">
        <AboutMe />
      </div>
      <div className="mb-4">
        <AboutSkills />
      </div>
      <CareerCard />
    </section>
  );
}

export default AboutPage;