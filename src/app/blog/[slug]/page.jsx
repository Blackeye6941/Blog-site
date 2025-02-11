//import { getPost } from "@/components/navbar/links/navlink/lib/data";
import User from "@/components/userfetch/User";
import { getPost } from "@/lib/data";
import Image from "next/image"

const SingleBlogPage = async ({params}) => {

  const { slug } = params;
  //console.log(params);
  const post = await getPost(slug);

  return (
    <>
      <div className="flex gap-2 lg:gap-[40px] xl:gap-[50px] flex-col sm:flex-row">
        <div className="flex relative w-[100%] max-md:w-[60%] lg:w-[60%] xl:w-[40%] h-[35vh] max-md:h-[35vh] md:h-[65vh] lg:h-[65vh] xl:h-[65vh] translate-y-[-50px]">
          <Image src="/image1.jpg" alt="" fill className="object-cover"/>
        </div>
        <div className="flex-2">
          <h1 className="text-[45px]">{post.title}</h1>
          <div className="flex flex-col gap-3 text-[20px] border-b-2">
          <div className="flex flex-row gap-10">
            <span>Author</span>
            <span>Date</span>
          </div>
          <div className="flex flex-row gap-10">
            <User userId={post.userId}/>
          </div>
          </div>
          <p className="pt-8  text-[14px] ">{post.body}</p>
        </div>
      </div>
    </>
  )
}

export default SingleBlogPage
