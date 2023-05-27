export interface IUserRepositoryFind {
  find(params:IUserRepositoryFind.Params): Promise<IUserRepositoryFind.Result | Error>
}
export namespace IUserRepositoryFind {
  export type Params = {
    id: string
  }
  export type Result = {
    name: string
    email: string
    password: string
  }
}