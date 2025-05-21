import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import STATUS_CODES from 'http-response-status-code';
import { ExperienceService } from './experience.service';

const createExperience = catchAsync(async (req, res) => {
  const data = req.body;
  const experience = await ExperienceService.createExperienceIntoDB(data);
  sendResponse(res, {
    statusCode: STATUS_CODES.CREATED,
    success: true,
    message: 'Experience created successfully',
    data: experience,
  });
});

const getAllExperiences = catchAsync(async (_req, res) => {
  const result = await ExperienceService.getAllExperiencesFromDB();
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Experiences retrieved successfully',
    data: result,
  });
});



const deleteExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceService.deleteExperienceIntoDB(id);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Experience deleted successfully',
    data: result,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await ExperienceService.updateExperienceIntoDB(id, data);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  });
});

export const ExperienceController = {
  createExperience,
  getAllExperiences,
  deleteExperience,
  updateExperience,
};
