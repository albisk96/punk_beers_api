import axios from 'axios';
import config from '../config';

const client = axios.create({
  baseURL: `${config.BEER_API_BASE_URL}/v${config.BEER_API_VERSION}`,
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let res = error.response;
    console.error('Looks like there was a problem. Status Code: ' + res.status);
    return Promise.reject(error);
  }
);

export { client };
