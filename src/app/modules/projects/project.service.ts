import STATUS_CODES from 'http-response-status-code';
import AppError from '../../errors/AppError';
import Project from './project.model';
import { TProject } from './project.interface';

const createProjectIntoDB = async (payload: TProject) => {
  return await Project.create(payload);
};

const getAllProjectsFromDB = async () => {
  return await Project.find();
};

const getProjectByIdFromDB = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(STATUS_CODES.NOT_FOUND, "Project not found");
  }
  return project;
};

const deleteProjectIntoDB = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(STATUS_CODES.NOT_FOUND, "Project not found");
  }
  return await Project.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(STATUS_CODES.NOT_FOUND, "Project not found");
  }
  return await Project.findByIdAndUpdate(id, payload, { new: true });
};

export const ProjectService = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getProjectByIdFromDB,
  deleteProjectIntoDB,
  updateProjectIntoDB,
};
