
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {

    const pathname = usePathname();
    const isActive = pathname === link.path;


  return (
    <div>
      <Link href={link.path} className={isActive?"bg-white rounded-xl text-black px-2 py-1 min-w-[100px]":""}>{link.title}</Link>
    </div>
  )
}

export default NavLink