import React from 'react';

import { Button } from '../';

import './CloseButton.css';

function CloseButton() {
  return (
    <Button className="Portfolio_CloseButton d-inline-flex justify-content-center align-items-center">
      &times;
    </Button>
  );
}

export default CloseButton;
