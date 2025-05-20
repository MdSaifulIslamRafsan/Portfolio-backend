import { z } from "zod";

export const projectValidationSchemaForCreate = z.object({
  body: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    technologies: z.array(z.string()).min(1),
    link: z.string().url(),
    client: z.string().url(),
    server: z.string().url(),
    image: z.string().url(),
    features: z.array(z.string()).min(1),
    overview: z.string().min(1),
  }),
});

export const projectValidationSchemaForUpdate = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    client: z.string().url().optional(),
    server: z.string().url().optional(),
    image: z.string().url().optional(),
    features: z.array(z.string()).optional(),
    overview: z.string().optional(),
  }),
});

export const ProjectValidation = {
  projectValidationSchemaForCreate,
  projectValidationSchemaForUpdate,
};
