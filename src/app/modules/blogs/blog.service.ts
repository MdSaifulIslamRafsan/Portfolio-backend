import STATUS_CODES from 'http-response-status-code';
import AppError from '../../errors/AppError';
import { TBlog } from './blog.interface';
import Blog from './blog.model';

const createBlogIntoDB = async (blog: TBlog) => {
  const result = await Blog.create(blog);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};

const getBlogBySlugFromDB = async (slug: string) => {
  const result = await Blog.findOne({ slug });
  if (!result) {
    throw new AppError(STATUS_CODES.NOT_FOUND, 'Blog not found');
  }
  return result;
};

const deleteBlogIntoDB = async (id: string) => {
  const existingBlog = await Blog.findById(id);
  if (!existingBlog) {
    throw new AppError(STATUS_CODES.NOT_FOUND, 'Blog not found');
  }
  const result = await Blog.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  return result;
};

const updateBlogIntoDB = async (id: string, blog: Partial<TBlog>) => {
  const existingBlog = await Blog.findById(id);
  if (!existingBlog) {
    throw new AppError(STATUS_CODES.NOT_FOUND, 'Blog not found');
  }
  const result = await Blog.findByIdAndUpdate(id, blog, {
    new: true,
  });
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getBlogBySlugFromDB,
  deleteBlogIntoDB,
  updateBlogIntoDB,
};
