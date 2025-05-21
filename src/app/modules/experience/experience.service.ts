import STATUS_CODES from 'http-response-status-code';
import AppError from '../../errors/AppError';
import Experience from './experience.model';
import { TExperience } from './experience.interface';

const createExperienceIntoDB = async (data: TExperience) => {
  return await Experience.create(data);
};

const getAllExperiencesFromDB = async () => {
  return await Experience.find();
};



const deleteExperienceIntoDB = async (id: string) => {
  const exist = await Experience.findById(id);
  if (!exist) throw new AppError(STATUS_CODES.NOT_FOUND, 'Experience not found');
  return await Experience.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

const updateExperienceIntoDB = async (id: string, data: Partial<TExperience>) => {
  const exist = await Experience.findById(id);
  if (!exist) throw new AppError(STATUS_CODES.NOT_FOUND, 'Experience not found');
  return await Experience.findByIdAndUpdate(id, data, { new: true });
};

export const ExperienceService = {
  createExperienceIntoDB,
  getAllExperiencesFromDB,
  deleteExperienceIntoDB,
  updateExperienceIntoDB,
};
