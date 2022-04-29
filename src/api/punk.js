import { client } from './client';

const getBeers = () => {
  return client.get('/beers');
};

export { getBeers };
