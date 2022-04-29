import React, { useContext } from 'react';
import { BeerDataContext } from '../contexts/BeerDataContext';
import { SORT_BEER_VALUES } from '../constants';
import BeerCard from '../common/BeerCard';
import SelectButton from '../common/SelectButton';

const BeerGrid = () => {
  const { beers, sortBeers } = useContext(BeerDataContext);

  const handleBeerSort = (e) => {
    const { value } = e.target;
    sortBeers(value);
  };

  return (
    <>
      <SelectButton
        handleChange={handleBeerSort}
        options={SORT_BEER_VALUES}
        label="Sort By:"
      />
      <div className="my-grid">
        {beers.map((beer, idx) => (
          <BeerCard key={idx} beer={beer} />
        ))}
      </div>
    </>
  );
};

export default BeerGrid;
