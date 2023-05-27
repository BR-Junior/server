export interface IUserUseCaseFind {
  find(params: IUserUseCaseFind.Params): Promise<IUserUseCaseFind.Result | Error>
}
export namespace IUserUseCaseFind {
  export type Params = {
    id: string
  }
  export type Result = {

    name: string
    email: string
    password: string
  }
}