import mongoose, { Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema: Schema<TProject> = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    link: { type: String, required: true },
    client: { type: String, required: true },
    server: { type: String, required: true },
    image: { type: String, required: true },
    features: { type: [String], required: true },
    overview: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

projectSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

projectSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

projectSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

const Project = mongoose.model<TProject>("Project", projectSchema);
export default Project;
