'use client'
import ShowResult from "@/components/ShowResult";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Result() {
  const {status} = useSession()
  if(status == "unauthenticated"){
     redirect("/login")
  }
  return (
    <div>
        <ShowResult/>
    </div>
  )
}
