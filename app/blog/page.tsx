import { getAllBlogPosts } from "@/lib/sanity-queries";
import BlogClient from "./BlogClient";

export const revalidate = 0;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  return <BlogClient posts={posts} categories={categories} />;
}
