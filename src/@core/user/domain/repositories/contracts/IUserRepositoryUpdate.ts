import {UserEntity} from '../../entity/UserEntity';

export interface IUserRepositoryUpdate {
  update(params: IUserRepositoryUpdate.Params): Promise<IUserRepositoryUpdate.Result>
}
export namespace IUserRepositoryUpdate {
  export type Params = {
    id: string
    name: string
    email: string
    password: string
  }
  export type Result = UserEntity | Error
}