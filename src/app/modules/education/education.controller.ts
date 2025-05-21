import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import STATUS_CODES from 'http-response-status-code';
import { EducationService } from './education.service';

const createEducation = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await EducationService.createEducationIntoDB(data);
  sendResponse(res, {
    statusCode: STATUS_CODES.CREATED,
    success: true,
    message: 'Education created successfully',
    data: result,
  });
});

const getAllEducations = catchAsync(async (_req, res) => {
  const result = await EducationService.getAllEducationsFromDB();
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Educations retrieved successfully',
    data: result,
  });
});



const updateEducation = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await EducationService.updateEducationIntoDB(id, data);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Education updated successfully',
    data: result,
  });
});

const deleteEducation = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await EducationService.deleteEducationIntoDB(id);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Education deleted successfully',
    data: result,
  });
});

export const EducationController = {
  createEducation,
  getAllEducations,
  updateEducation,
  deleteEducation,
};
