import React from 'react';

import DefinitionList from '../DefinitionList';
import listInfo from './listInfo';
import './AboutSkills.css';

function AboutSkills() {
  return (
    <section className="Portfolio_AboutSkills p-4">
      <h3 class="heading text-center mb-4">Skills</h3>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-75">
          <DefinitionList listInfo={listInfo} />
        </div>
      </div>
    </section>
  );
}

export default AboutSkills;