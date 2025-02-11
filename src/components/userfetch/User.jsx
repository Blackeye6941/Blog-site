//import { getUser } from "../navbar/links/navlink/lib/data"

import { getUser } from "@/lib/data";

const User = async ({userId}) => {
    const user = await getUser(userId);
  return (
    <>
            <span></span>
            <span className="pl-6">11.02.2025</span>
    </>
  )
}

export default User
