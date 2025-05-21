import Education from './education.model';
import { TEducation } from './education.interface';
import AppError from '../../errors/AppError';
import STATUS_CODES from 'http-response-status-code';

const createEducationIntoDB = async (data: TEducation) => {
  const result = await Education.create(data);
  return result;
};

const getAllEducationsFromDB = async () => {
  return await Education.find();
};



const updateEducationIntoDB = async (id: string, data: Partial<TEducation>) => {
  const education = await Education.findByIdAndUpdate(id, data, { new: true });
  if (!education) throw new AppError(STATUS_CODES.NOT_FOUND, 'Education not found');
  return education;
};

const deleteEducationIntoDB = async (id: string) => {
  const education = await Education.findByIdAndDelete(id);
  if (!education) throw new AppError(STATUS_CODES.NOT_FOUND, 'Education not found');
  return education;
};

export const EducationService = {
  createEducationIntoDB,
  getAllEducationsFromDB,
  updateEducationIntoDB,
  deleteEducationIntoDB,
};
