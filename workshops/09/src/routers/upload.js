import { Router } from 'express';
import UploadController from '../controllers/upload.js';

const uploadsRouter = Router();

uploadsRouter.post('/', UploadController.upload);

export default uploadsRouter;
