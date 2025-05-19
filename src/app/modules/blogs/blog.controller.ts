import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import STATUS_CODES from 'http-response-status-code';
import { BlogService } from "./blog.service";
const createBlog = catchAsync(async (req, res) => {
  const blogData = req.body;

  const newBlog = await BlogService.createBlogIntoDB(blogData);

  sendResponse(res, {
    statusCode: STATUS_CODES.CREATED,
    success: true,
    message: "Blog created successfully",
    data: newBlog,
  });
});

export const BlogController = {
    createBlog
}
