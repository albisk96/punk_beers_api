import React from 'react';
import { Oval } from 'react-loader-spinner';

const LoadingIndicator = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
      />
    </div>
  );
};

export default LoadingIndicator;
