import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <>
    <div className="flex-1">

      <h1 className="text-[40px] pb-[10vh]"><p className="text-[45px]">Catch up on what’s hot right now!</p>Never miss a post—sign up today!</h1>
      <p><Link href="/login"><button className="bg-black text-white px-8 py-1 text-[30px] mr-5 border-2 rounded-[25px] hover:bg-white hover:text-black">Login</button></Link>
      <Link href="/register"><button className="bg-black text-white px-8 py-1 text-[30px] border-2 rounded-[25px] hover:bg-white hover:text-black">Signup</button></Link>
      </p>
    </div>
    <aside className="relative flex-1 float-right my-[-400px] md:w-[300px] md:h-[400px]  xl:w-[500px] xl:h-[500px]">
      <Image src="/image2.jpg" fill className="object-cover hidden md:hidden lg:block xl:block"/>
    </aside>
    </>
  )
}

export default Hero
