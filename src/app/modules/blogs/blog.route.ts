import express from 'express';
import { BlogController } from './blog.controller';
import validateRequest from '../../middleware/validateRequest';
import { BlogValidation } from './blog.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(BlogValidation.blogValidationSchemaForCreate),
  BlogController.createBlog
);

router.get('/', BlogController.getAllBlogs);

router.get('/:slug', BlogController.getBlogBySlug);
router.delete('/:id', BlogController.deleteBlog);
router.put(
  '/:id',
  validateRequest(BlogValidation.blogValidationSchemaForUpdate),
  BlogController.updateBlog
);

export const BlogRoutes = router;
