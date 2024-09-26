import Link from "next/link"

const Hero = () => {
  return (
    <>
      <h1 className="text-[40px] pb-[10vh]"><p className="text-[45px]">Catch up on what’s hot right now!</p>Never miss a post—sign up today!</h1>
      <p><Link href="/login"><button className="bg-black text-white px-8 py-1 text-[30px] mr-5 border-2 rounded-[25px] hover:bg-white hover:text-black">Login</button></Link>
      <Link href="/register"><button className="bg-black text-white px-8 py-1 text-[30px] border-2 rounded-[25px] hover:bg-white hover:text-black">Signup</button></Link>
      </p>
    </>
  )
}

export default Hero
