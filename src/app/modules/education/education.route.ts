import express from 'express';
import { EducationController } from './education.controller';
import validateRequest from '../../middleware/validateRequest';
import { EducationValidation } from './education.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(EducationValidation.educationValidationSchemaForCreate),
  EducationController.createEducation
);
router.get('/', EducationController.getAllEducations);

router.put(
  '/:id',
  validateRequest(EducationValidation.educationValidationSchemaForUpdate),
  EducationController.updateEducation
);
router.delete('/:id', EducationController.deleteEducation);

export const EducationRoutes = router;
