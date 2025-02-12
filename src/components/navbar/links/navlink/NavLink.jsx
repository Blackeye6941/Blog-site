
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {

    const pathname = usePathname();
    const isActive = pathname === link.path;


  return (
    <div className="py-10  translate-x-[85px] drop-shadow-lg hover:decoration-purple-300">
      <Link href={link.path} className={isActive?"bg-white rounded-xl text-black px-2 py-1 min-w-[100px] transition  ease-in 0.8s":"hover:text-slate-500"} prefetch={false}>{link.title}</Link>
    </div>
  )
}

export default NavLink
