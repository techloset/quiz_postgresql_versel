import 'react-toastify/dist/ReactToastify.css';
import Welcome from './welcome/page';
// import { getServerSession } from 'next-auth';
// import { redirect } from 'next/dist/server/api-utils';
// import { authOptions } from './api/auth/[...nextauth]/route';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

export default async function Home() {
    // const session = await getServerSession(authOptions);
    // if (session) {
    //   res.redirect(307, '/quiz'); // Use "res" to redirect with a status code
    
    // }


  // const router = useRouter();

  //   useEffect(() => {
  //     async function checkSession() {
  //       const session = await getServerSession(authOptions);
  //       if (session) {
  //         router.push('/quiz'); // Use Next.js router for client-side navigation
  //       }
  //     }
  
  //     checkSession();
  //   }, []);

  return (
    <>
    <Welcome/>
    </>
    
  )
}
