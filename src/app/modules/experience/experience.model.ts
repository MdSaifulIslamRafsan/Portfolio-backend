import mongoose, { Schema } from 'mongoose';
import { TExperience } from './experience.interface';

const experienceSchema: Schema<TExperience> = new mongoose.Schema(
  {
    period: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    projects: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

experienceSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
experienceSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
experienceSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

const Experience = mongoose.model<TExperience>('Experience', experienceSchema);
export default Experience;
