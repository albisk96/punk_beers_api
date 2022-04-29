import React, { useCallback, useEffect, useRef, useState } from 'react';
import { closeAllEvent } from '../../custom_events';

const BeerAccordion = ({ beer }) => {
  const { name, description, first_brewed, tagline } = beer;
  const [height, setHeight] = useState('0px');
  const [active, setActive] = useState(false);

  const contentSpace = useRef(null);

  const toggleAccordion = () => {
    setActive((prevState) => !prevState);
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
  };

  const closeAll = useCallback(() => {
    setActive(false);
    setHeight('0px');
  }, []);

  useEffect(() => {
    window.addEventListener(closeAllEvent.type, closeAll);

    return () => {
      window.removeEventListener(closeAllEvent.type, closeAll);
    };
  }, []);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button font-bold"
          type="button"
          onClick={toggleAccordion}
        >
          {name}
        </button>
      </h2>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="accordion-collapse transition-max-height"
      >
        <div className="accordion-body py-4 px-5">
          <div className="flex flex-initial">
            <p className="font-bold">First Brewed:</p>
            <p>&nbsp;{first_brewed}</p>
          </div>
          <div className="mt-5">{description}</div>
          <div className="tag mt-5">#{tagline}</div>
        </div>
      </div>
    </div>
  );
};

export default BeerAccordion;
