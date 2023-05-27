import {Response} from 'express';
import {UserRepository} from '../../../domain/repositories/repository/UserRepository';
import {UserUseCaseSearch} from '../../../application/useCases/UserUseCaseSearch/UserUseCaseSearch';


export const userControllerSearch = async (req:Record<string, any>, res:Response) => {
  const userRepository = new UserRepository();
  const userUseCaseSearch = new UserUseCaseSearch(userRepository);

  const result = await userUseCaseSearch.search({
    name: req.params.name,
    order: req.query.order
  });

  if (result instanceof Error) return res.status(400).json(result.message);
  if (result) return res.status(200).json(result);
};