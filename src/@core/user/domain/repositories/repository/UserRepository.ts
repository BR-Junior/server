import {dataSource} from '../../../../../config/database/dataSource';
import {User} from '../../../infra/database/User';
import {IUserRepositoryCreate} from '../contracts/IUserRepositoryCreate';
import {IUserRepositoryUpdate} from '../contracts/IUserRepositoryUpdate';
import {IUserRepositoryFind} from '../contracts/IUserRepositoryFind';
import {IUserRepositoryDelete} from '../contracts/IUserRepositoryDelete';
import {IUserRepositorySearch} from '../contracts/IUserRepositorySearch';


export class UserRepository implements
  IUserRepositoryCreate,
  IUserRepositoryUpdate,
  IUserRepositoryFind,
  IUserRepositoryDelete,
  IUserRepositorySearch{
  public repoDb = dataSource.getRepository(User);

  async create(params: IUserRepositoryCreate.Params): Promise<IUserRepositoryCreate.Result> {
    try {
      const result = await this.repoDb.create(params);
      return await this.repoDb.save(result) as IUserRepositoryCreate.Result;

    }catch (e) {
      return new Error('Query error');
    }
  }

  async update(params: IUserRepositoryUpdate.Params): Promise<IUserRepositoryUpdate.Result> {
    try {
      await this.repoDb.update(params.id, params);
      const find = await this.repoDb.findOne({
        where: {
          id: params.id
        }
      });
      if (!find) return new Error('User not found');
      return find as IUserRepositoryUpdate.Result;

    }catch (e) {
      return new Error('Query error');
    }
  }

  async find(params: IUserRepositoryFind.Params): Promise<IUserRepositoryFind.Result | Error> {
    try {
      const find = await this.repoDb.findOneBy({id:params.id});
      if (!find) return new Error('User not found');
      return find;
    }catch (e) {
      return new Error('Query error');
    }
  }

  async delete(params: IUserRepositoryDelete.Params): Promise<IUserRepositoryDelete.Result | Error> {
    try {
      const {affected} = await this.repoDb.delete(params.id);
      if (!affected) return new Error('false');
      return true;
    }catch (e) {
      return new Error('Query error');
    }
  }

  async search(params: IUserRepositorySearch.Params): Promise<IUserRepositorySearch.Result[] | Error> {
    try {
      !params.order ? params.order = 'ASC' : params.order;

      return await this.repoDb.createQueryBuilder('user')
        .where('user.name LIKE :name', {
          name: `%${params.name}%`
        }).orderBy({
          'user.id': `${params.order}`
        }).getMany();



      // return await this.repoDb.find({
      //   where: {name: }
      // });
    }catch (e) {
      return new Error('Query error');
    }
  }
}