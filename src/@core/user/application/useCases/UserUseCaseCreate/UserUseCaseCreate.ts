import {IUserUseCaseCreate} from '../../contracts/IUserUseCaseCreate';
import {UserEntity} from '../../../domain/entity/UserEntity';


export class UserUseCaseCreate implements IUserUseCaseCreate{
  constructor(private repoUseCase: IUserUseCaseCreate) {}

  async create(params: IUserUseCaseCreate.Params): Promise<IUserUseCaseCreate.Result> {
    try {
      const entity = await new UserEntity(
        params.name,
        params.email,
        params.password
      ).validation();

      if (entity instanceof Error) return entity;

      return await this.repoUseCase.create(entity);

    }catch (e) {
      return new Error('Internal service error');
    }
  }
}