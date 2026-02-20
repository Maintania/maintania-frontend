"use client"

import { Avatar, Space, Typography } from "antd"
import { Button } from "@repo/ui/button"
import { useRouter } from "next/navigation"


type Props = {
  name?: string | null
  username?: string
  email?: string | null
  image?: string | null
}

export default function UserProfile({
  name,
  username,
  email,
  image
}: Props) {
  const router = useRouter()
  async function signOut(){
    try {
      await fetch("http://localhost:8000/auth/logout", {
        method: "POST",
        credentials: "include"
      })
      router.push('/login')
    } catch (error) {
      
    }
   
  }
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <Space size={12} align="start">
          <Avatar size={48} src={image ?? undefined}>
            {name?.charAt(0)?.toUpperCase() ?? "U"}
          </Avatar>

          <div>
            <Typography.Text strong className="block text-base text-slate-900">
              {name ?? "GitHub User"}
            </Typography.Text>
            <Typography.Text type="secondary" className="block">
              @{username ?? "unknown"}
            </Typography.Text>
            <Typography.Text type="secondary">{email ?? "No email"}</Typography.Text>
          </div>
        </Space>

        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </div>
  )
}
