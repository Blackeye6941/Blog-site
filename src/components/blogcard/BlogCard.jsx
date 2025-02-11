import Image from "next/image"
import Link from "next/link"

const BlogCard = ({post}) => {
  return (
    <>
        <div className="flex flex-col gap-[20px] mb-3">
            <div className="flex">
                <div className="relative w-[90%] h-[250px]">
                    <Image src="/image1.jpg" alt="" fill className="object-cover"/>
                </div>
                <span className=" text-[14px] rotate-[270deg] m-auto">1.01.2005</span>
        </div>
            <div className="">
                <h1 className="text-[20px]">{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">Read more.....</Link>
            </div>
        </div>
    </>
  )
}

export default BlogCard
