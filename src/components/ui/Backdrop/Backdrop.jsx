// Background.js
import React from 'react';
import './Backdrop.scss';

const Background = ({variant="--textured-1", children }) => {
  return (
    <div className={`app-background${variant} app-background`}>
      {children}
    </div>
  );
};

export default Background;
