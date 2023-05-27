import {Response} from 'express';
import {UserRepository} from '../../../domain/repositories/repository/UserRepository';
import {UserUseCaseDelete} from '../../../application/useCases/UserUseCaseDelete/UserUseCaseDelete';


export const userControllerDelete = async (req:Record<string, any>, res:Response) => {
  const userRepository = new UserRepository();
  const userUseCaseDelete = new UserUseCaseDelete(userRepository);

  const result = await userUseCaseDelete.delete(req.params);

  if (result instanceof Error) return res.status(400).json(result.message);
  if (result) return res.status(200).json(result);
};