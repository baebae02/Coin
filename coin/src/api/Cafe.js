import API from '@/utils/API';
const CAFE = '/api/cafes';
import { ERROR } from '@/utils/Errors';

const Cafe = {
  post: async (data) => {
        const response = await API('POST', CAFE, data);
        if (response.status === 400) throw new Error(ERROR.BAD_REQUEST);
        else if (response.status === 500) throw new Error(ERROR.INTERNAL_SERVER_ERROR);
        return response.data;
  },
  delete: async (id) => {
      const response = await API('DELETE', CAFE, {id});
      if (response.status === 400) throw new Error(ERROR.BAD_REQUEST);
      else if (response.status === 404) throw new Error(ERROR.NOT_FOUND);
      else if (response.status === 500) throw new Error(ERROR.INTERNAL_SERVER_ERROR);
      return response.data;
  },
  get: async (page, per_page, name, location) => {
      const response = await API('GET', CAFE, {page, per_page, name, location});
      if (response.status === 400) throw new Error(ERROR.BAD_REQUEST);
      else if (response.status === 404) throw new Error(ERROR.NOT_FOUND);
      else if (response.status === 500) throw new Error(ERROR.INTERNAL_SERVER_ERROR);
      return response.data;
  },
  getId: async (id) => {
    const response = await('GET', CAFE, id);
    if (response.status === 400) throw new Error(ERROR.BAD_REQUEST);
    else if (response.status === 404) throw new Error(ERROR.NOT_FOUND);
    else if (response.status === 500) throw new Error(ERROR.INTERNAL_SERVER_ERROR);
    return response.data;
  },
  update: async (id, data) => {
    const response = await('PATCH', CAFE, id, data);
      if (response.status === 400) throw new Error(ERROR.BAD_REQUEST);
      else if (response.status === 404) throw new Error(ERROR.NOT_FOUND);
      else if (response.status === 500) throw new Error(ERROR.INTERNAL_SERVER_ERROR);
    return response.data;
  }
};

export default Cafe;
