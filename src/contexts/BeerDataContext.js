import React, { createContext, useEffect, useState } from 'react';
import { getBeers } from '../api/punk';
import { customSort } from '../helpers/customSort';

export const BeerDataContext = createContext(null);

const BeerDataContextProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  const getBeersData = async () => {
    const { data } = await getBeers();
    setBeers(data);
  };

  useEffect(() => {
    getBeersData();
  }, []);

  const sortBeers = (sortKey) => {
    const copyOfBeers = [...beers];
    const newList = copyOfBeers.sort(customSort(sortKey));
    setBeers(newList);
  };

  return (
    <BeerDataContext.Provider
      value={{
        beers,
        setBeers,
        sortBeers,
      }}
    >
      {children}
    </BeerDataContext.Provider>
  );
};
export default BeerDataContextProvider;
