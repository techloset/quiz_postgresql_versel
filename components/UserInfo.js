"use client"
// import SignInBtn from './signInBtn'
import { useSession } from 'next-auth/react'

import Quiz from "@/app/quiz/page";

import SignIn from '@/app/signIn/page';

export default function UserInfo() {
    const {status, data:session} = useSession()
    if(status === 'authenticated'){
        
       return  <Quiz/>
    }else{
        return <SignIn/>
    }
}
