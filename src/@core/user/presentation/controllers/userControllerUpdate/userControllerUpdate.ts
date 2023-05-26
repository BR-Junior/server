import {UserRepository} from '../../../domain/repositories/repository/UserRepository';
import {UserUseCaseUpdate} from '../../../application/useCases/UserUseCaseUpdate/UserUseCaseUpdate';
import {Response} from 'express';


export const UserControllerUpdate = async (req:Record<string, any>, res:Response) => {
  const userRepository = new UserRepository();
  const userUseCaseUpdate = new UserUseCaseUpdate(userRepository);

  const result = await userUseCaseUpdate.update({
    id: req.params.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  if (result instanceof Error) return res.status(400).json(result.message);
  if (result.errors) return res.status(400).json(result);
  if (result) return res.status(200).json(result);  
};