'use client'
import LoginForm from "@/components/LoginForm";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default  function Login() {
    const router = useRouter()
  const {status} = useSession()
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/quiz");
    }
  }, [status, router]);
  return (
    <>
     <LoginForm/>
    </>
  )}  