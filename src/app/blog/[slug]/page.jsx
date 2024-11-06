import Image from "next/image"

const SingleBlogPage = () => {
  return (
    <>
      <div className="flex gap-2 lg:gap-[40px] xl:gap-[50px] flex-col sm:flex-row">
        <div className="flex relative w-[100%] max-md:w-[60%] lg:w-[60%] xl:w-[40%] h-[35vh] max-md:h-[35vh] md:h-[65vh] lg:h-[65vh] xl:h-[65vh] translate-y-[-50px]">
          <Image src="/image1.jpg" alt="" fill className="object-cover"/>
        </div>
        <div className="flex-2">
          <h1 className="text-[45px]">Title</h1>
          <div className="flex flex-col gap-3 text-[20px] border-b-2">
          <div className="flex flex-row gap-10">
            <span>Author</span>
            <span>Date</span>
          </div>
          <div className="flex flex-row gap-10">
            <span>Michel</span>
            <span>22.12.2005</span>
          </div>
          </div>
          <p className="pt-8  text-[14px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, temporibus illum mollitia facilis eius dolorum odit laborum, architecto consequuntur iusto doloribus aliquid dicta iste soluta. Aperiam illum cumque iusto reiciendis?</p>
        </div>
      </div>
    </>
  )
}

export default SingleBlogPage
