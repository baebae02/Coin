import API from '@/utils/API';
import { ERROR } from '@/utils/Errors';

const USER_API_PATH = '/api/users';

export const User = {
    post: async (data) => {
        const response = await API('POST', USER_API_PATH, data);
        if (response.status === 400) throw new Error(ERROR.BAD_REQUEST);
        else if (response.status === 500) throw new Error(ERROR.INTERNAL_SERVER_ERROR);
        return response.data;
    },
};
