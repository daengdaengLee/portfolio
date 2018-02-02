import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

import './ProjectSynopsis.css';

function ProjectSynopsis({ projectDesc }) {
  return (
    <div className="Portfolio_ProjectSynopsis">
      <LinesEllipsis
        text={projectDesc}
        maxLine='5'
        ellipsis='...'
        trimRight
        basedOn='letters'
      />
    </div>
  );
}

export default ProjectSynopsis;