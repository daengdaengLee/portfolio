import React from 'react';

import { DefinitionList, Title,  } from '../';
import listInfo from './listInfo';

import './AboutSkills.css';

function AboutSkills() {
  return (
    <section className="Portfolio_AboutSkills p-4">
      <Title tagName="h3" content="Skills" className="AboutSkills_Heading text-center mb-4" />
      <div className="AboutSkills_Main d-flex justify-content-center align-items-center">
        <div className="w-75">
          <DefinitionList listInfo={listInfo} />
        </div>
      </div>
    </section>
  );
}

export default AboutSkills;