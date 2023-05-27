import {Response} from 'express';
import {UserRepository} from '../../../domain/repositories/repository/UserRepository';
import {UserUseCaseFind} from '../../../application/useCases/UserUseCaseFind/UserUseCaseFind';


export const userControllerFind = async (req:Record<string, any>, res:Response) => {
  const userRepository = new UserRepository();
  const userUseCaseFind = new UserUseCaseFind(userRepository);

  const result = await userUseCaseFind.find(req.params);

  if (result instanceof Error) return res.status(400).json(result.message);
  if (result) return res.status(200).json(result);
};