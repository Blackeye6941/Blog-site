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
    <div className="flex center gap-[70px] max-md:hidden">
      {links.map((link =>(
        <NavLink link={link} key={link.title}/>
      )))}
      {
        session ? (
            <>
            {isAdmin && <NavLink link={{title:"Admin", path:"/admin"}}/>}
            <button className="bg-white rounded-xl text-black px-2 py-1 min-w-[100px]">Logout</button>
            </>
        ):(
            <NavLink link={{title:"Login", path:"/login"}}/>
        )
      }
      
    </div>
    <div className="lg:hidden xl:hidden md:hidden">
    <button className={open ? "pl-[22vh]":""} onClick={() => setOpen(!open)}>
        Menu
      </button>
      {open && 
      <div className="z-1 flex flex-col px-auto justify-center gap-[10px] h-[95vh] w-[20vh] border-l-2 pl-20 ">
      {links.map((link =>(
        <NavLink link={link} key={link.title}/>
      )))}
      </div>}
    </div>
    </div>
  )
}

export default Links