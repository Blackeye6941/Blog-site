import { getUser } from "../navbar/links/navlink/lib/data"

const User = async ({userId}) => {
    const user = await getUser(userId);
  return (
    <>
            <span>{user.name}</span>
            <span className="pl-6">11.02.2025</span>
    </>
  )
}

export default User
