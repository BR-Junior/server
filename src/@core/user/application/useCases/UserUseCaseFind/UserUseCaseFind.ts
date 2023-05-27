import {IUserUseCaseFind} from '../../contracts/IUserUseCaseFind';


export class UserUseCaseFind implements IUserUseCaseFind{
  constructor(private repoUseCase: IUserUseCaseFind) {}
  async find(params: IUserUseCaseFind.Params): Promise<IUserUseCaseFind.Result | Error> {
    return await this.repoUseCase.find(params);
  }
}