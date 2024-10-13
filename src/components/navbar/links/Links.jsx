"use client"
import { useState } from "react";
import NavLink from "./navlink/NavLink"


const Links = () => {

    const links = [
        {
            title : "Home",
            path : "/"
        },
        {
            title: "About",
            path : "/about"
        },
        {
            title: "Contact",
            path : "/contact"
        },
        {
            title: "Blog",
            path : "/blog"
        },
    ]

        //temporary
        const session = true;
        const isAdmin = false;

        const [open, setOpen] = useState(false);

  return (
    <div className="">
    <div className="flex flex-row gap-[70px] max-md:hidden">
      {links.map((link =>(
        <NavLink link={link} key={link.title}/>
      )))}
      {
        session ? (
            <>
            {isAdmin && <NavLink link={{title:"Admin", path:"/admin"}}/>}
            <button className="bg-white rounded-xl text-black px-2 py-1 min-w-[100px] transition  ease-in 0.8s">Logout</button>
            </>
        ):(
            <NavLink link={{title:"Login", path:"/login"}}/>
        )
      }
      
    </div>
    <div className="md:hidden lg:hidden xl:hidden">
    <button className="pl-[50px]" onClick={() => setOpen(!open)}>
        Menu
      </button>
      {open && <div className="flex flex-col absolute bg-slate-500 w-[25%] max-md:w-[15%] pt-[60px] gap-[50px] items-end h-[95vh] bg-opacity-20">
      {links.map((link =>(
        <NavLink link={link} key={link.title}/>
      )))}
      {
        session ? (
            <>
            {isAdmin && <NavLink link={{title:"Admin", path:"/admin"}}/>}
            <button className="hover:text-slate-500">Logout</button>
            </>
        ):(
            <NavLink link={{title:"Login", path:"/login"}}/>
        )
      }
      </div>}
      
    </div>
    </div>
  )
}

export default Links