import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import STATUS_CODES from "http-response-status-code";
import { ProjectService } from "./project.service";

const createProject = catchAsync(async (req, res) => {
  const project = await ProjectService.createProjectIntoDB(req.body);
  sendResponse(res, {
    statusCode: STATUS_CODES.CREATED,
    success: true,
    message: "Project created successfully",
    data: project,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const projects = await ProjectService.getAllProjectsFromDB();
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: "Projects retrieved successfully",
    data: projects,
  });
});

const getProjectById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const project = await ProjectService.getProjectByIdFromDB(id);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: "Project retrieved successfully",
    data: project,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  const id = req.params.id;
  const project = await ProjectService.deleteProjectIntoDB(id);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: "Project deleted successfully",
    data: project,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const id = req.params.id;
  const project = await ProjectService.updateProjectIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: "Project updated successfully",
    data: project,
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  getProjectById,
  deleteProject,
  updateProject,
};
