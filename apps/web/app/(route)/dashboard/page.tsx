"use client"
import UserProfile from "../../_components/user-profile"
import Dashboard from "../../_components/dashboard"
import { useAuth } from "../../../lib/hook/useAuth"


export default function DashboardPage() {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-6">
      <UserProfile
        name={user?.name ?? undefined}
        username={user?.username ?? undefined}
        email={user?.email ?? undefined}
        image={user?.avatar_url ?? undefined}
      />
      <Dashboard />
    </div>
  )
}