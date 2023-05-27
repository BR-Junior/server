export interface IUserRepositorySearch {
  search(params: IUserRepositorySearch.Params): Promise<IUserRepositorySearch.Result[] | Error>
}
export namespace IUserRepositorySearch {
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