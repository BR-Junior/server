import {IUserUseCaseCreate} from '../../contracts/IUserUseCaseCreate';
import {UserEntity} from '../../../domain/entity/UserEntity';


export class UserUseCaseCreate implements IUserUseCaseCreate{
  constructor(private repoUseCase: IUserUseCaseCreate) {}

  async create(params: IUserUseCaseCreate.Params): Promise<IUserUseCaseCreate.Result | Error> {
    try {
      const entity = new UserEntity(
        params.name,
        params.email,
        params.password
      );

      const isValid = await entity.validation();
      if (isValid.errors) return isValid;

      return await this.repoUseCase.create(entity);

    }catch (e) {
      return new Error('Internal service error');
    }
  }
}