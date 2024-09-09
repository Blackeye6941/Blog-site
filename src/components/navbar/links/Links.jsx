"use client"
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
        const isAdmin = true;

  return (
    <div className="flex center gap-[70px]">
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
  )
}

export default Links
