import express from 'express';

import validateRequest from '../../middleware/validateRequest';
import { ExperienceValidation } from './experience.validation';
import { ExperienceController } from './experience.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ExperienceValidation.experienceValidationSchemaForCreate),
  ExperienceController.createExperience
);

router.get('/', ExperienceController.getAllExperiences);

router.delete('/:id', ExperienceController.deleteExperience);
router.put(
  '/:id',
  validateRequest(ExperienceValidation.experienceValidationSchemaForUpdate),
  ExperienceController.updateExperience
);

export const ExperienceRoutes = router;
