import {UserEntity} from '../../entity/UserEntity';

export interface IUserRepositoryCreate {
  create(params: IUserRepositoryCreate.Params): Promise<IUserRepositoryCreate.Result>
}
export namespace IUserRepositoryCreate {
  export type Params = {
    id: string
    name: string
    email: string
    password: string
  }
  export type Result = UserEntity | Error
}