import React, { useContext } from 'react';
import { BeerDataContext } from '../../contexts/BeerDataContext';
import BeerAccordion from './AccordionContent';
import { closeAllEvent } from '../../custom_events';

const Accordion = () => {
  const { beers } = useContext(BeerDataContext);

  const handleCloseAll = () => {
    window.dispatchEvent(closeAllEvent);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between mt-5 mb-5">
        <p className="title">Beer List</p>
        <button
          className="my-button flex items-center"
          onClick={handleCloseAll}
        >
          Close All
        </button>
      </div>
      {beers.map((beer) => (
        <BeerAccordion key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default Accordion;
