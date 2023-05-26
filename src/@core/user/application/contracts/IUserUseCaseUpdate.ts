export interface IUserUseCaseUpdate {
  update(params: IUserUseCaseUpdate.Params): Promise<IUserUseCaseUpdate.Result | Error>
}
export namespace IUserUseCaseUpdate {
  export type Params = {
    id: string
    name: string
    email: string
    password: string
  }
  export type Result = {
    errors?: string
    name: string
    email: string
    password: string
  }
}