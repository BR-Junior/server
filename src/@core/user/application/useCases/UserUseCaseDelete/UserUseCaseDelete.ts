import {IUserUseCaseDelete} from '../../contracts/IUserUseCaseDelete';


export class UserUseCaseDelete implements IUserUseCaseDelete{
  constructor(private repoUseCase: IUserUseCaseDelete) {}
  async delete(params: IUserUseCaseDelete.Params): Promise<IUserUseCaseDelete.Result | Error> {
    return this.repoUseCase.delete(params);
  }
}