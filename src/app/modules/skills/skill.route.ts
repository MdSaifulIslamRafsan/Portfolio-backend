import express from 'express';
import { SkillController } from './skill.controller';
import validateRequest from '../../middleware/validateRequest';
import { SkillValidation } from './skill.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(SkillValidation.skillValidationSchemaForCreate),
  SkillController.createSkill
);
router.get('/', SkillController.getAllSkills);
router.patch(
  '/:id',
  validateRequest(SkillValidation.skillValidationSchemaForUpdate),
  SkillController.updateSkill
);
router.delete('/:id', SkillController.deleteSkill);

export const SkillRoutes = router;
