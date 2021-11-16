import API from '@/utils/API';
const CAFE = '/api/cafes';
import { AUTH_ERROR } from '@/utils/Errors';

const Cafe = {
  post: async (data) => {
        const response = await API('POST', CAFE, data);
        if (response.status !== 200) throw new Error(AUTH_ERROR.NOT_FOUND);
        return response.data;
  },
  delete: async (id) => {
      const response = await API('DELETE', CAFE, {id});
      if(response.status!==200) throw new Error(AUTH_ERROR.NOT_FOUND);
      return response.data;
  },
  get: async (page, per_page, name, location) => {
      const response = await API('GET', CAFE, {page, per_page, name, location});
      if(response.status!==200) throw new Error(AUTH_ERROR.NOT_FOUND);
      return response.data;
  },
  getId: async (id) => {
    const response = await('GET', CAFE, id);
    if(response.status!==200) throw new Error(AUTH_ERROR.NOT_FOUND);
    return response.data;
  },
  update: async (id, data) => {
    const response = await('PATCH', CAFE, id, data);
    if(response.status!==200) throw new Error(AUTH_ERROR.NOT_FOUND);
    return response.data;
  }
};

export default Cafe;
