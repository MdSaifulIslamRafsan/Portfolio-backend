import { TBlog } from "./blog.interface";
import Blog from "./blog.model";

const createBlogIntoDB = async (blog: TBlog) => {
    const result = await Blog.create(blog);
    return result;
} 

export const BlogService = {
    createBlogIntoDB,
}