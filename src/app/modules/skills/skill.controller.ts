import { Request, Response } from "express";

import { SkillService } from "./skill.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.createSkillIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Skill created successfully",
    data: result,
  });
});

const getAllSkills = catchAsync(async (_req: Request, res: Response) => {
  const result = await SkillService.getAllSkillsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skills fetched successfully",
    data: result,
  });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillService.updateSkillInDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill updated successfully",
    data: result,
  });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillService.deleteSkillFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill deleted successfully",
    data: result,
  });
});

export const SkillController = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
};
