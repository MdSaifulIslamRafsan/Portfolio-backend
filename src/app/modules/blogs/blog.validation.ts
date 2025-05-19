import { z } from "zod";

export const blogValidationSchemaForCreate = z.object({
  body: z.object({
    slug: z.string().min(1, { message: "Slug is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    bannerImage: z
      .string()
      .url({ message: "Banner image must be a valid URL" }),
    content: z.string().min(1, { message: "Content is required" }), // HTML as string
    tags: z
      .array(z.string())
      .min(1, { message: "At least one tag is required" }),
    author: z.string().min(1, { message: "Author is required" }),
    readingTime: z.string().min(1, { message: "Reading time is required" }),
  }),
});
export const BlogValidation = {
  blogValidationSchemaForCreate,
};
