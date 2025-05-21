import { z } from 'zod';

const projectSchema = z.object({
  title: z.string().min(1, { message: 'Project title is required' }),
  description: z.string().min(1, { message: 'Project description is required' }),
});

export const experienceValidationSchemaForCreate = z.object({
  body: z.object({
    period: z.string().min(1, { message: 'Period is required' }),
    role: z.string().min(1, { message: 'Role is required' }),
    company: z.string().min(1, { message: 'Company is required' }),
    projects: z.array(projectSchema).min(1, { message: 'At least one project is required' }),
  }),
});

export const experienceValidationSchemaForUpdate = z.object({
  body: z.object({
    period: z.string().optional(),
    role: z.string().optional(),
    company: z.string().optional(),
    projects: z.array(projectSchema).optional(),
  }),
});

export const ExperienceValidation = {
  experienceValidationSchemaForCreate,
  experienceValidationSchemaForUpdate,
};
