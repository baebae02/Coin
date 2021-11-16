import axios from 'axios';
import qs from 'qs';

const API = async (method, url, data) => {
  const config = {
    method,
    url,
    withCredentials: true,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
    validateStatus: status => status >= 200 && status < 300,
  };

  if (['get', 'delete'].includes(method.toLowerCase())) {
    config.params = { ...data, currentTime: Date.now() };
  } else {
    config.data = data;
  }

  return axios.request(config);
};

export default API;