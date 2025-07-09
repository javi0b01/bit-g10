import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model('User', userSchema);
