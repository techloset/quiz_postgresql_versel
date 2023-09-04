'use client'
import RegisterForm from '@/components/RegisterForm'
// import { getServerSession } from 'next-auth';
// import React, { useEffect } from 'react'
// import { authOptions } from '../api/auth/[...nextauth]/route';
// import { redirect } from 'next/dist/server/api-utils';
// import { useRouter } from 'next/navigation';

export default async function Register() {
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
     <RegisterForm/>
    </>
  )
}
