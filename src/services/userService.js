import { UserModel } from '@/models/User';

class UserService {
  #BASE_URL = 'https://jsonplaceholder.typicode.com';
  async getUsers() {
    const rawUsers = await fetch(`${this.#BASE_URL}/users`).then(res => res.json());
    return rawUsers.map(user => new UserModel({
      ...user,
      // assigning some random gender
      gender: Math.random() > .5 ? 'male' : 'female',
    }));
  }
}

export const userService = new UserService();
