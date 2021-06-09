import UserRepository from '../services/user/UserService';
import { users } from './mockData';

const userRepository: UserRepository = new UserRepository();
export async function userSeed() {
    const dbUsers = await userRepository.get();
    if (dbUsers.length === 0) {
        try {
            console.log('Seeding Data');
            users.forEach((user) => {
              userRepository.create(user);
            })

        } catch (err) {
            console.log(err);
        }
    }
}
