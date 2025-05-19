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

const getBlogByIdFromDB = async (slug: string) => {
    const result = await Blog.findOne({slug});
    if (!result) {
        throw new Error("Blog not found");
    }
    return result;
}

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getBlogByIdFromDB
};
