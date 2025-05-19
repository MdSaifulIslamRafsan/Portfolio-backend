import express from "express";
import { BlogController } from "./blog.controller";
import validateRequest from "../../middleware/validateRequest";
import { BlogValidation } from "./blog.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(BlogValidation.blogValidationSchemaForCreate),
  BlogController.createBlog
);




export const BlogRoutes = router;
