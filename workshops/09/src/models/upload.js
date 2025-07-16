import { Schema, model } from 'mongoose';

const UploadModel = new Schema(
  {
    //file: { data: Buffer, contentType: String },
    file: { data: Buffer },
  },
  { versionKey: false, timestamps: true }
);

export default model('Upload', UploadModel);
