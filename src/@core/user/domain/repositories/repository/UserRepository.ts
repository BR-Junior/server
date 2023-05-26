import {dataSource} from '../../../../../config/database/dataSource';
import {User} from '../../../infra/database/User';
import {IUserRepositoryCreate} from '../contracts/IUserRepositoryCreate';


export class UserRepository implements IUserRepositoryCreate{
  public repoDb = dataSource.getRepository(User);

  async create(params: IUserRepositoryCreate.Params): Promise<IUserRepositoryCreate.Result | Error> {
    try {
      const result = await this.repoDb.create(params);
      return await this.repoDb.save(result);

    }catch (e) {
      return new Error('Query error');
    }
  }
}