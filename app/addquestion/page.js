'use client'
import Addqes from "@/components/Addqes";
import UserQuestions from "@/components/UserQuestions";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AddQuestion() {
  const { status } = useSession()
  if (status == "unauthenticated") {
    redirect("/login")
  }
  return (
    <div>
      <Addqes />
      <UserQuestions />
    </div>
  )
}
