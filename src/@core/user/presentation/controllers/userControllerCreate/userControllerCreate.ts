import {Request, Response} from 'express';
import {UserRepository} from '../../../domain/repositories/repository/UserRepository';
import {UserUseCaseCreate} from '../../../application/useCases/UserUseCaseCreate/UserUseCaseCreate';


export const userControllerCreate = async (req:Request, res:Response) => {
  const userRepository = new UserRepository();
  const userUseCaseCreate = new UserUseCaseCreate(userRepository);

  const result = await userUseCaseCreate.create(req.body);

  if (result instanceof Error) return res.status(400).json(result);
  if (result.errors) return res.status(400).json(result);
  if (result) return res.status(200).json(result);
};