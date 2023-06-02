import {IUserUseCaseUpdate} from '../../contracts/IUserUseCaseUpdate';
import {UserEntity} from '../../../domain/entity/UserEntity';


export class UserUseCaseUpdate implements IUserUseCaseUpdate{
  constructor(private repoUseCase: IUserUseCaseUpdate) {
  }
  async update(params: IUserUseCaseUpdate.Params): Promise<IUserUseCaseUpdate.Result> {
    try {
      const entity = await new UserEntity(
        params.name,
        params.email,
        params.password,
        params.id
      ).validation();
      if (entity instanceof Error) return entity;

      return await this.repoUseCase.update(entity);

    }catch (e) {
      return new Error('Internal service error');
    }
  }
}