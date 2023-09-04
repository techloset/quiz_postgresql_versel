'use client'
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './welcome/page';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default  function Home() {
  const {status} = useSession()
  if(status == "authenticated"){
     redirect("/quiz")
  }
  return (
    <>
    <Welcome/>
    </>
    
  )
}
