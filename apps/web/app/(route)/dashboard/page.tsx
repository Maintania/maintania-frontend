import { getServerSession } from "next-auth"
import UserProfile from "../../_components/user-profile"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import Dashboard from "../../_components/dashboard"
import Link from "next/link"


export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) return <div>Unauthorized</div>

  return (
    <div>
        <UserProfile
          name={session.user?.name}
          username={session.user?.username}
          email={session.user?.email}
          image={session.user?.image}
        />
        <Link href="https://github.com/apps/maintania-app/installations/new">selct for rpeo</Link>
        <Dashboard/>
    </div>
  )
}
