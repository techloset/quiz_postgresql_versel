'use client'
import LoginForm from "@/components/LoginForm";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/dist/server/api-utils";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

export default async function Login() {
  // const router = useRouter();

  // useEffect(() => {
  //   async function checkSession() {
  //     const session = await getServerSession(authOptions);
  //     if (session) {
  //       router.push('/quiz'); // Use Next.js router for client-side navigation
  //     }
  //   }

  //   checkSession();
  // }, []);
  return (
    <>
     <LoginForm/>
    </>
  )
}
