'use client'

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Navbar() {

    const router = useRouter()
    const {status}= useSession() 
    const handleLogout = () =>{
        signOut()
        router.push("/quiz")
    }

  return (
    <div className="p-4 flex justify-between items-center shadow-md mb-20 mt-2 ">
        <Link href={'/'} className="font-bold text-lg text-blue-500">👨‍🎓 Quiz APP</Link>
        {status === "authenticated" ? (
            <>
            <button onClick={handleLogout} className="bg-red-500 py-2 text-white font-bold px-3 rounded-md ">Sign Out</button>
            <Link href={'/addquestion'}  className="bg-blue-500 py-2 text-white font-bold px-3 rounded-md  ">Add Question</Link>
            </>
        ):(
            <button onClick={()=>signIn("google")} className="bg-blue-500 py-2 text-white font-bold px-3 rounded-md ">Sign In</button>
            
        )}
    </div>
  )
}
