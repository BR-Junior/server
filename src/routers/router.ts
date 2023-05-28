import express from 'express';

import {userRouters} from './user/userRouters';

const router = express();

router.use(express.json());

router.use(userRouters);

export { router };