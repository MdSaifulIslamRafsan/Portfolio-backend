
import { z } from "zod";

export const skillValidationSchemaForCreate = z.object({
  body: z.object({
    icon: z.string().min(1, "Icon is required"),
    name: z.string().min(1, "Name is required"),
    expertise: z.enum(["Beginner", "Intermediate", "Expert"], {
      required_error: "Expertise is required",
    }),
    color: z.string().min(1, "Color is required"),
  }),
});

export const skillValidationSchemaForUpdate = z.object({
  body: z.object({
    icon: z.string().optional(),
    name: z.string().optional(),
    expertise: z.enum(["Beginner", "Intermediate", "Expert"]).optional(),
    color: z.string().optional(),
  }),
});

export const SkillValidation = {
  skillValidationSchemaForCreate,
  skillValidationSchemaForUpdate,
};
