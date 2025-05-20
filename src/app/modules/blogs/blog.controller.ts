import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import STATUS_CODES from 'http-response-status-code';
import { BlogService } from './blog.service';
const createBlog = catchAsync(async (req, res) => {
  const blogData = req.body;

  const newBlog = await BlogService.createBlogIntoDB(blogData);

  sendResponse(res, {
    statusCode: STATUS_CODES.CREATED,
    success: true,
    message: 'Blog created successfully',
    data: newBlog,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const blogs = await BlogService.getAllBlogsFromDB();
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Blogs retrieved successfully',
    data: blogs,
  });
});

const getBlogBySlug = catchAsync(async (req, res) => {
  const slug = req.params.slug;

  const blog = await BlogService.getBlogBySlugFromDB(slug);

  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Blog retrieved successfully',
    data: blog,
  });
});
const deleteBlog = catchAsync(async (req, res) => {
  const id = req.params.id;

  const blog = await BlogService.deleteBlogIntoDB(id);

  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Blog Deleted successfully',
    data: blog,
  });
});
const updateBlog = catchAsync(async (req, res) => {
  const id = req.params.id;
  const blog = req.body;
  const result = await BlogService.updateBlogIntoDB(id, blog);

  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Blog Updated successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  deleteBlog,
  updateBlog,
};
