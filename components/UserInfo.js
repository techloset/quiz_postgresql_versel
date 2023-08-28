"use client"
// import SignInBtn from './signInBtn'
import { useSession } from 'next-auth/react'

import Quiz from "@/app/quiz/page";

import SignIn from '@/app/signIn/page';
import Image from 'next/image';

export default function UserInfo() {
    const {status, data:session} = useSession()
    if(status === 'authenticated'){
        // This comment is use full that's why I cannot Remove It

      // return  <div>
      //   <Image className='rounded-full' src={session?.user?.image} alt='user' width={100} height={100}/>
      //   <div>{session?.user?.name}</div>
      //   <div>{session?.user?.email}</div>
      //   <div>{session?.user?.id}</div>
      // </div>     
       return  <Quiz/>
    }else{
        return <SignIn/>
    }
}
