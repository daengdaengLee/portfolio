import React from 'react';

import './ProjectLink.css';

function ProjectLink() {
  return (
    <ul className="Portfolio_ProjectLink">
      <li className="my-1"><a href="#" target="_blank" className="link">Project Page</a></li>
      <li><a href="#" target="_blank" className="link">Project Repo</a></li>
    </ul>
  );
}

export default ProjectLink;