import API from '@/utils/API';
const USER = '/api/users';
import { ERROR } from '@/utils/Errors';

const User = {
    post: async (data) => {
        const response = await API('POST', USER, data);
        if (response.status === 400) throw new Error(ERROR.BAD_REQUEST);
        else if (response.status === 500) throw new Error(ERROR.INTERNAL_SERVER_ERROR);
        return response.data;
    },
};

export default User;
