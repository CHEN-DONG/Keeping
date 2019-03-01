import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7000/';
axios.defaults.withCredentials = true;

export default {
  get: (url, options) => {
    const urlWithStamp = `${url}?t=${Date.now()}`;
    return axios.get(urlWithStamp, options);
  },
  post: (url, options) => axios.post(url, options),
  put: (url, options) => axios.put(url, options),
  delete: (url, options) => axios.delete(url, options),
};
