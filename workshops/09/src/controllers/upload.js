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
            message: 'Error uploading file.',
            data: error.message,
          });
        } else {
          if (!req.file) {
            res.status(404).json({
              allOK: false,
              message: 'Error, file not found.',
              data: null,
            });
          }
          const newFile = new UploadModel({
            file: {
              data: req.file.filename,
            },
          });
          const result = await newFile.save();
          res.status(201).json({
            allOK: true,
            message: 'File uploaded successfully.',
            data: result._id,
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: 'Error uploading file.',
        data: error.message,
      });
    }
  },
};

export default UploadController;
