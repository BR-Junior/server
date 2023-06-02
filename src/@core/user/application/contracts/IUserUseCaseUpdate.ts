import {UserEntity} from '../../domain/entity/UserEntity';

export interface IUserUseCaseUpdate {
  update(params: IUserUseCaseUpdate.Params): Promise<IUserUseCaseUpdate.Result>
}
export namespace IUserUseCaseUpdate {
  export type Params = {
    id: string
    name: string
    email: string
    password: string
  }
  export type Result = UserEntity | Error
}