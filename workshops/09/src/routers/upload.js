import { Router } from 'express';
import UploadController from '../controllers/upload.js';

const uploadRouter = Router();

uploadRouter.post('/', UploadController.upload);

export default uploadRouter;
