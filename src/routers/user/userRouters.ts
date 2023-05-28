import express, {Request, Response} from 'express';
import {
  userControllerCreate,
  userControllerFind,
  userControllerUpdate,
  userControllerDelete,
  userControllerSearch
} from '../../@core/user/presentation/controllers';



const userRouters = express();

userRouters.post('/user', (req:Request, res:Response) => userControllerCreate(req, res));

userRouters.put('/user-update/:id', (req:Request, res:Response) => userControllerUpdate(req, res));

userRouters.get('/user/:id', (req:Request, res:Response) => userControllerFind(req, res));

userRouters.delete('/user/:id', (req:Request, res:Response) => userControllerDelete(req, res));

userRouters.get('/user-search/:name', (req:Request, res:Response) => userControllerSearch(req, res));

export {userRouters};