"use client"

import { signOut } from "next-auth/react"

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
  return (
    <div className="flex items-center gap-3">
      <img
        src={image ?? ""}
        className="w-10 h-10 rounded-full"
        alt="avatar"
      />

      <div>
        <p className="font-semibold text-gray-500">{name}</p>
        <p className="text-gray-500">@{username}</p>
        <p className="text-sm">{email}</p>

        <button
          className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
          onClick={() => signOut({ callbackUrl: "http://localhost:3001" })}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
