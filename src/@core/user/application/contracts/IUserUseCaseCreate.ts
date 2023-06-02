import {UserEntity} from '../../domain/entity/UserEntity';

export interface IUserUseCaseCreate {
  create(params: IUserUseCaseCreate.Params): Promise<IUserUseCaseCreate.Result>
}
export namespace IUserUseCaseCreate {
  export type Params = {
    name: string
    email: string
    password: string
  }
  export type Result = UserEntity | Error
}