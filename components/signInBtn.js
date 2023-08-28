"use client"
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function SignInBtn() {

  const router = useRouter()

  const handleSignIn = () =>{
    signIn()
    router.puch('/quiz')
  }
  return (
    <button onClick={handleSignIn} className="flex cursor-pointer py-2 px-3 justify-start items-center  shadow-xl">
       <Image src='/google-logo.png' className="mt-5 mx-3" alt="Logo" width={35} height={40}/>
        <span className=" text-white font-bold py-2 px-3 mt-5  bg-blue-600">Sign In With Google</span>
    </button>
  )
}
