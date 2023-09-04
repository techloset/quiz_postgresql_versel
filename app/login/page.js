'use client'
import LoginForm from "@/components/LoginForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default  function Login() {
  const {status} = useSession()
   if(status == "authenticated"){
      redirect("/quiz")
   }

  return (
    <>
     <LoginForm/>
    </>
  )}  