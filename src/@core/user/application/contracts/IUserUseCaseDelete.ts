export interface IUserUseCaseDelete {
  delete(params: IUserUseCaseDelete.Params): Promise<IUserUseCaseDelete.Result | Error>
}
export namespace IUserUseCaseDelete {
  export type Params = {
    id: string
  }
  export type Result = boolean
}