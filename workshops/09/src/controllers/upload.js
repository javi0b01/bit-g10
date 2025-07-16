import multer from 'multer';
import UploadModel from '../models/upload.js';

const UploadController = {
  upload: async (req, res) => {
    try {
      const storage = multer.diskStorage({
        destination: 'uploads',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      });
      const load = multer({ storage: storage }).single('file');
      load(req, res, async (error) => {
        if (error) {
          res.status(500).json({
            allOK: false,
            message: 'An error occurred.',
            data: error.message,
          });
        } else {
          console.log('file:', req.file);
          if (!req.file) {
            res.status(500).json({
              allOK: false,
              message: 'An error occurred.',
              data: null,
            });
          }
          const newFile = new UploadModel({
            file: {
              data: req.file.filename,
              //contentType: 'image/png',
            },
          });
          const result = await newFile.save();
          res.status(201).json({
            allOK: true,
            message: 'File uploaded successfully.',
            data: result,
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: 'An error occurred.',
        data: error.message,
      });
    }
  },
};

export default UploadController;
