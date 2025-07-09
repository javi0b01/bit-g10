import { Router } from 'express';
import UsersController from '../controllers/users.js';

const usersRouter = Router();

usersRouter.post('/', UsersController.register);

export default usersRouter;
