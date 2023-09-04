'use client'
import GetData from "@/components/getData";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Quiz() {
  const {status} = useSession()
  if(status == "unauthenticated"){
     redirect("/register")
  }
  return (
    <>
     <GetData/>
    </>
  )
}
