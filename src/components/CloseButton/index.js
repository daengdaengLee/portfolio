import React from 'react';

import Button from '../Button';

import './CloseButton.css';

function CloseButton({ ...remainProps }) {
  return (
    <Button className="Portfolio_CloseButton d-inline-flex justify-content-center align-items-center" {...remainProps}>
      &times;
    </Button>
  );
}

export default CloseButton;
