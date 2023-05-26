import {dataSource} from '../../../../../config/database/dataSource';
import {User} from '../../../infra/database/User';
import {IUserRepositoryCreate} from '../contracts/IUserRepositoryCreate';
import {IUserRepositoryUpdate} from '../contracts/IUserRepositoryUpdate';


export class UserRepository implements
  IUserRepositoryCreate,
  IUserRepositoryUpdate{
  public repoDb = dataSource.getRepository(User);

  async create(params: IUserRepositoryCreate.Params): Promise<IUserRepositoryCreate.Result | Error> {
    try {
      const result = await this.repoDb.create(params);
      return await this.repoDb.save(result);

    }catch (e) {
      return new Error('Query error');
    }
  }

  async update(params: IUserRepositoryUpdate.Params): Promise<IUserRepositoryUpdate.Result | Error> {
    try {
      await this.repoDb.update(params.id, params);
      const find = await this.repoDb.findOne({
        where: {
          id: params.id
        }
      });
      if (!find) return new Error('User not found');
      return find;

    }catch (e) {
      return new Error('Query error');
    }
  }
}