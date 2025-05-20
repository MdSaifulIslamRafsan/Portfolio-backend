import Skill from "./skill.model";
import { TSkill } from "./skill.interface";


const createSkillIntoDB = async (data: TSkill) => {
  return await Skill.create(data);
};

const getAllSkillsFromDB = async () => {
  return await Skill.find();
};

const updateSkillInDB = async (id: string, payload: Partial<TSkill>) => {
  return await Skill.findByIdAndUpdate(id, payload, { new: true });
};

const deleteSkillFromDB = async (id: string) => {
  return await Skill.findByIdAndDelete(id);
};

export const SkillService = {
  createSkillIntoDB,
  getAllSkillsFromDB,
  updateSkillInDB,
  deleteSkillFromDB,
};
