export interface IUserRepositoryUpdate {
  update(params: IUserRepositoryUpdate.Params): Promise<IUserRepositoryUpdate.Result | Error>
}
export namespace IUserRepositoryUpdate {
  export type Params = {
    id: string
    name: string
    email: string
    password: string
  }
  export type Result = {
    name: string
    email: string
    password: string
  }
}