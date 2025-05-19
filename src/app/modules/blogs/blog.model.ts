import mongoose, {Schema} from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema : Schema<TBlog> = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    bannerImage: {
      type: String,
      required: true,
    },
    content: {
      type: String, // HTML string
      required: true,
    },
    
    tags: {
      type: [String], // Array of strings
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    readingTime: {
      type: String, // e.g. "6 min"
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const Blog = mongoose.model<TBlog>("Blog", blogSchema);
export default Blog;
