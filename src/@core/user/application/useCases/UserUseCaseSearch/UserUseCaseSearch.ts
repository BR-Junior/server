import {IUserUseCaseSearch} from '../../contracts/IUserUseCaseSearch';


export class UserUseCaseSearch implements IUserUseCaseSearch{
  constructor(private repoUseCase: IUserUseCaseSearch) {}
  async search(params: IUserUseCaseSearch.Params): Promise<IUserUseCaseSearch.Result[] | Error> {
    return await this.repoUseCase.search(params);
  }
}