import mongoose, { Schema } from 'mongoose';
import { TEducation } from './education.interface';

const educationSchema: Schema<TEducation> = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    additional: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Education = mongoose.model<TEducation>('Education', educationSchema);
export default Education;
