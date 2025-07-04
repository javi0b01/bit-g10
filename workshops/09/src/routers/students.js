import { Router } from 'express';
import StudentsController from '../controllers/students.js';

const studentsRouter = Router();

studentsRouter.post('/', StudentsController.create);
studentsRouter.get('/', StudentsController.readAll);
studentsRouter.get('/:id', StudentsController.readOne);
studentsRouter.put('/:id', StudentsController.update);
studentsRouter.delete('/:id', StudentsController.delete);

export default studentsRouter;
