import {IUserRepositoryCreate} from '../contracts/IUserRepositoryCreate';
import {IUserRepositoryUpdate} from '../contracts/IUserRepositoryUpdate';


export class UserRepositoryFake implements
  IUserRepositoryCreate,
  IUserRepositoryUpdate{
  private repoCreate:IUserRepositoryCreate.Params[] = [];
  private repoUpdate:IUserRepositoryUpdate.Params[] = [];

  async create(params: IUserRepositoryCreate.Params): Promise<IUserRepositoryCreate.Result | Error> {
    this.repoCreate.push(params);
    const result = this.repoCreate.find(user => user);

    if (!result) return new Error('Error repoCreate');
    const {id,name,email,password} = result;

    return result;
  }

  async update(params: IUserRepositoryUpdate.Params): Promise<IUserRepositoryUpdate.Result | Error> {
    this.repoUpdate.push(params);
    const result = this.repoUpdate.find(user => user.id === params.id);

    if (!result) return new Error('Error repoUpdate');
    const {id,name,email,password} = result;

    return result;

  }
}