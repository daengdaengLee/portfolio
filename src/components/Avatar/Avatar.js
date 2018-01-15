import React from 'react';
import './Avatar.css';

function Avatar() {
  return (
    <div className="Portfolio_Avatar rounded-circle p-2">
      <img 
        src="https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg"
        alt="프로필 이미지"
        className="Avatar_Image rounded-circle w-100"
      />
    </div>
  );
}

export default Avatar;