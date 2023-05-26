export interface IUserRepositoryCreate {
  create(params: IUserRepositoryCreate.Params): Promise<IUserRepositoryCreate.Result | Error>
}
export namespace IUserRepositoryCreate {
  export type Params = {
    id: string
    name: string
    email: string
    password: string
  }
  export type Result = {
    id: string
    name: string
    email: string
    password: string
  }
}