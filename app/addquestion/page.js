'use client'
import Addqes from "@/components/Addqes";
import UserQuestions from "@/components/UserQuestions";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AddQuestion() {
  const { status, data: session } = useSession()
  if (status == "unauthenticated") {
    redirect("/register")
  }
  return (
    <div>
      <Addqes />
      <UserQuestions />
    </div>
  )
}
