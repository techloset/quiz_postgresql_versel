'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Welcome() {
  const {status} = useSession()
  if(status == "authenticated"){
     redirect("/quiz")
  }
  return (
    <div>
          <div className='flex my-10  justify-center '>
          <Image src='/welcome Quiz.jpg' alt='welcome' height={600} width={300}/>
          </div>
          <h1 className="text-center text-3xl font-bold mt-24">Welcome To the Quiz App
             </h1>
          <p className="lead text-center  mt-10" >This is a simple quiz app that allows you to test  your knowledge <br/>  on different topics.</p>
          <div className='text-center mt-8'>
          <Link href={'/login'} className='bg-green-600 text-white py-3 px-3  rounded-md hover:bg-green-800 '> {!status?'Start Quiz':'Login to Start Quiz'} ⏩</Link>
          </div>
    </div>  
  )
}
