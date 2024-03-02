// components/Loader/Loader.js
import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <BallTriangle color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;
