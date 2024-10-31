"use client"

const Logincard = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-300 text-black max-md:w-[50vh] md:w-[50%] lg:w-[40%] xl:w-[40%] h-[51vh] mb-[20vh] mx-auto rounded-[40px]">
        <div className="text-[40px] mx-auto pt-4 pb-10">Login</div>
        <form action="">
          <div className=" max-md:px-[25px] md:px-[40px] lg:px-[50px] xl:px-[100px] pb-10"><label htmlFor="Username" className="text-[20px]">Username: </label>
            <input className="text-black border-0 rounded-lg" type="text" id="name" placeholder="Enter Username"/>
            </div>
          <div className=" max-md:px-[25px] md:px-[40px] lg:px-[50px] xl:px-[100px] pb-6"><label htmlFor="Password" className="text-[20px]">Password: </label>
            <input className="text-black border-0 rounded-lg" type="password" id="name" placeholder="Enter Password"/>
            </div>
          <button className="bg-black text-white text-[20px] px-6 max-md:mx-[135px] md:mx-[140px] lg:mx-[155px] xl:mx-[220px] rounded-xl py-2 ">Login</button>
        </form>
      </div>
    </>
  )
}

export default Logincard
