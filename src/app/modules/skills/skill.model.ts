import mongoose, { Schema } from "mongoose";
import { TSkill } from "./skill.interface";

const skillSchema: Schema<TSkill> = new mongoose.Schema(
  {
    icon: { type: String, required: true },
    name: { type: String, required: true },
    expertise: {
      type: String,
      enum: ["Beginner", "Intermediate", "Expert"],
      required: true,
    },
    color: { type: String, required: true },
  },
  { timestamps: true }
);

const Skill = mongoose.model<TSkill>("Skill", skillSchema);
export default Skill;
