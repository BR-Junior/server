import {IUserUseCaseUpdate} from '../../contracts/IUserUseCaseUpdate';
import {UserEntity} from '../../../domain/entity/UserEntity';


export class UserUseCaseUpdate implements IUserUseCaseUpdate{
  constructor(private repoUseCase: IUserUseCaseUpdate) {
  }
  async update(params: IUserUseCaseUpdate.Params): Promise<IUserUseCaseUpdate.Result | Error> {
    try {
      const entity = new UserEntity(
        params.name,
        params.email,
        params.password,
        params.id
      );

      const isValid = await entity.validation();
      if (isValid.errors) return isValid;

      return await this.repoUseCase.update(entity);

    }catch (e) {
      return new Error('Internal service error');
    }
  }
}