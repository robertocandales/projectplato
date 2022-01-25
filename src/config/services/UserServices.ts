import axios from 'axios';
import { BASE_API } from '../API';
import { UserList } from '../DTOs/usersTypes';

const client = axios.create({
  baseURL: `${BASE_API}`,
});

const UserService = {
  getUsers: async (): Promise<UserList[]> => {
    return client.get(`/users`).then((res) => {
      return res.data;
    });
  },
};

export default UserService;
