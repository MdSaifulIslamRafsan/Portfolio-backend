import { TBlog } from "./blog.interface";
import Blog from "./blog.model";

const createBlogIntoDB = async (blog: TBlog) => {
  const result = await Blog.create(blog);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
};
