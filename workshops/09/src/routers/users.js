import { Router } from 'express';
import UsersController from '../controllers/users.js';

const usersRouter = Router();

usersRouter.post('/sign-up', UsersController.register);
usersRouter.post('/sign-in', UsersController.login);

export default usersRouter;
