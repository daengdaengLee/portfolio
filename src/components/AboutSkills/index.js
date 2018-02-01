import React from 'react';

import DefinitionList from '../DefinitionList';
import Title from '../Title';
import listInfo from './listInfo';
import './AboutSkills.css';

function AboutSkills() {
  return (
    <section className="Portfolio_AboutSkills p-4">
      <Title tagName="h3" content="Skills" color="gray" className="heading text-center mb-4" />
      <div className="main d-flex justify-content-center align-items-center">
        <div className="w-75">
          <DefinitionList listInfo={listInfo} />
        </div>
      </div>
    </section>
  );
}

export default AboutSkills;