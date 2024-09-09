
import Links from "./links/Links"

const Navbar = () => {
  return (
    <div className=" mt-4 flex flex-row justify-between bold">
      <div className="text-[30px]">Bloggie</div>
      <div className="text-[20px] pt-2">
        <Links/>
      </div>
    </div>
  )
}

export default Navbar
