import { z } from 'zod';

export const educationValidationSchemaForCreate = z.object({
  body: z.object({
    degree: z.string().min(1, { message: 'Degree is required' }),
    institution: z.string().min(1, { message: 'Institution is required' }),
    period: z.string().min(1, { message: 'Period is required' }),
    additional: z.string().optional(),
    icon: z.string().min(1, { message: 'Icon is required' }),
  }),
});

export const educationValidationSchemaForUpdate = z.object({
  body: z.object({
    degree: z.string().optional(),
    institution: z.string().optional(),
    period: z.string().optional(),
    additional: z.string().optional(),
    icon: z.string().optional(),
  }),
});

export const EducationValidation = {
  educationValidationSchemaForCreate,
  educationValidationSchemaForUpdate,
};
