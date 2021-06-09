import IUser from '../../entities/IUser';
import UserRepository from '../../repositories/business/user/repository';

class UserService {

  // tslint:disable-next-line:variable-name
  private _userRepository: UserRepository;

  public constructor() {
    this._userRepository = new UserRepository();
  }
  public async list(limit: number, skip: number): Promise<IUser[]> {
    return this._userRepository.list({ limit, skip });
  }

  public async get(query): Promise<IUser> {
    const { id } = query;
    return this._userRepository.get({id});
  }

  public async create(query): Promise<IUser> {
    const { name } = query;
    return this._userRepository.create({
      name,
    });
  }

  public async update(query): Promise<IUser> {
    const { name, originalId } = query;
    return this._userRepository.update({
      name,
      originalId,
    });
  }

  public async delete(query): Promise<IUser> {
    const { id } = query;
    return this._userRepository.delete({
      id,
    });
  }
}

export default UserService;
