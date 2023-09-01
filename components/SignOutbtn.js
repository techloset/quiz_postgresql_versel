'use client'

import {  redirect, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
export default function SignOutbtn() {
  // const router = useRouter() 

  

  // const { user } = useSession();
  const { status } = useSession();
  const authenticated = status
  const handleLogout=  () => {
    // try {
    //   console.log("Logging out and redirecting");
    //   await signOut();
    //   window.location.href('/')
    // } catch (error) {
    //   console.error("Logout error:", error);  
    // }
    
    if (authenticated) {
      signOut();
      // router.push('/');
      return redirect('/')
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
