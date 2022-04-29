import React from 'react';
import LandingCard from '../common/LandingCard';
import { LANDING_CARDS } from '../constants';

const LandingPage = () => {
  return (
    <>
      <h3 className="title p-4">Welcome!</h3>
      <div className="sm:flex text-center justify-center">
        {LANDING_CARDS.map(({ image_url, title }, idx) => (
          <React.Fragment key={idx}>
            <LandingCard imageUrl={image_url} title={title} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
