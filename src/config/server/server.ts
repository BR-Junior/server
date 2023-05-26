import express, {Request, Response} from 'express';
import {
  userControllerCreate
} from '../../@core/user/presentation/controllers/userControllerCreate/userControllerCreate';
import {
  UserControllerUpdate
} from '../../@core/user/presentation/controllers/userControllerUpdate/userControllerUpdate';

const server = express();

server.use(express.json());

server.get('/', (_, res) => {
  return res.json('start');
});

server.post('/user', (req:Request, res:Response) => userControllerCreate(req, res));

server.put('/user-update/:id', (req:Request, res:Response) => UserControllerUpdate(req, res));

// UserControllerUpdate

export { server };