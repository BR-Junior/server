export interface IUserRepositoryDelete {
  delete(params: IUserRepositoryDelete.Params): Promise<IUserRepositoryDelete.Result | Error>
}
export namespace IUserRepositoryDelete {
  export type Params = {
    id: string
  }
  export type Result = boolean
}