import { ProjectValidation } from './project.validation';
import express from "express";
import { ProjectController } from "./project.controller";
import validateRequest from "../../middleware/validateRequest";


const router = express.Router();

router.post(
  "/",
  validateRequest(ProjectValidation.projectValidationSchemaForCreate),
  ProjectController.createProject
);

router.get("/", ProjectController.getAllProjects);
router.get("/:id", ProjectController.getProjectById);

router.delete("/:id", ProjectController.deleteProject);

router.put(
  "/:id",
  validateRequest(ProjectValidation.projectValidationSchemaForUpdate),
  ProjectController.updateProject
);

export const ProjectRoutes = router;
