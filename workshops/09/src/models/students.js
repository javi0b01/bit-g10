import { Schema, model } from 'mongoose';

const studentSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    cohort: {
      type: Number,
    },
    enrolled: {
      type: Boolean,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model('Student', studentSchema);
