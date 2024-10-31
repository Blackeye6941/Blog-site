import BlogCard from "@/components/blogcard/BlogCard"

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-10 pb-[40vh]">
      <div className="xl:w-[30%] lg:w-[30%] md:w-[45%] max-md:w-[100%]">
        <BlogCard/>
      </div>
      <div className="xl:w-[30%] lg:w-[30%] md:w-[45%] max-md:w-[100%]">
        <BlogCard/>
      </div>
      <div className="xl:w-[30%] lg:w-[30%] md:w-[45%] max-md:w-[100%]">
        <BlogCard/>
      </div>
      <div className="xl:w-[30%] lg:w-[35%] md:w-[45%] max-md:w-[100%]">
        <BlogCard/>
      </div>
      <div className="xl:w-[30%] lg:w-[35%] md:w-[45%] max-md:w-[100%]">
        <BlogCard/>
      </div>
    </div>
  )
}

export default BlogPage
