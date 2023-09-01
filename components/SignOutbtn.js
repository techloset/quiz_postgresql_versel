'use client'

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
// import Link from "next/link";
export default function SignOutbtn() {
  const router = useRouter() 

  
  const handleLogout= async () => {
    try {
      console.log("Logging out and redirecting");
      await signOut();
      router.push('/');
    } catch (error) {
      console.error("Logout error:", error);
    }
 
  }
  return (
    <>
    <button 
    onClick={handleLogout}
    className="inline-flex  items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">Logout</button>
    </>
  )
}
