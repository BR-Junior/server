import express, {Request, Response} from 'express';
import {
  userControllerCreate
} from '../../@core/user/presentation/controllers/userControllerCreate/userControllerCreate';

const server = express();

server.use(express.json());

server.get('/', (_, res) => {
  return res.json('start');
});

server.post('/user', (req:Request, res:Response) => userControllerCreate(req, res));

export { server };