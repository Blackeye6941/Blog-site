import BlogCard from "@/components/blogcard/BlogCard"
import { getPosts } from "@/components/navbar/links/navlink/lib/data"

const BlogPage = async () => {
  const posts =  await getPosts();
  return (
    <div className="flex flex-wrap gap-10 pb-[40vh]">
      {posts.map((post) => {
        return (
      <div className="xl:w-[30%] lg:w-[30%] md:w-[45%] max-md:w-[100%]" key={post.id}>
        <BlogCard post = {post}/>
      </div>
        )
      })}
    </div>
  )
}

export default BlogPage
