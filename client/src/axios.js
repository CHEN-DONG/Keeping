import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7000/';
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  // Do something with response data
  if (response.data && response.data.code === 200) return response.data;
  return response;
}, (error) => {
  // Do something with response error
  return Promise.reject(error);
});

export default {
  get: (url, options) => {
    const urlWithStamp = `${url}?t=${Date.now()}`;
    return axios.get(urlWithStamp, options);
  },
  post: (url, options) => axios.post(url, options),
  put: (url, options) => axios.put(url, options),
  delete: (url, options) => axios.delete(url, options),
};
