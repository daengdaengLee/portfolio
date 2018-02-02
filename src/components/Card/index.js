import React from 'react';
import PropTypes from 'prop-types';

function Card({ left, right }) {
  return (
    <div className="row mx-0">
      <div className="col-md-4 p-4 d-inline-flex justify-content-center align-items-center">
        {left}
      </div>
      <div className="col-md-8 p-4 d-inline-flex justify-content-center align-items-center">
        {right}
      </div>
    </div>
  );
}

Card.propTypes = {
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Card;