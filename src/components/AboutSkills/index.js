import React from 'react';

import DefinitionList from '../DefinitionList';
import listInfo from './listInfo';

function AboutSkills() {
  return (
    <section className="p-4">
      <h3 class="mb-4">Skills</h3>
      <DefinitionList listInfo={listInfo} />
    </section>
  );
}

export default AboutSkills;