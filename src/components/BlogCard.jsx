import Image from "next/image"
import Link from "next/link"

const BlogCard = () => {
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
                <h1 className="text-[20px]">Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non earum a assumenda consectetur quaerat et minima, harum nihil pariatur quisquam at amet minus quae qui, maxime ex aut deleniti soluta.</p>
            <Link href="" className="text-blue-600 underline">Read more.....</Link>
            </div>
        </div>
    </>
  )
}

export default BlogCard
