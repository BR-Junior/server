export interface IUserUseCaseSearch {
  search(params: IUserUseCaseSearch.Params): Promise<IUserUseCaseSearch.Result[] | Error>
}
export namespace IUserUseCaseSearch {
  export type Params = {
    name: string
    order: 'ASC' | 'DESC'

  }
  export type Result = {
    id: string
    name: string
    email: string
    password: string
  }
}