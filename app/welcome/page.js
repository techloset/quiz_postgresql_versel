import Navbar from '@/components/Navbar'
import UserName from '@/components/UserName'
import Link from 'next/link'

export default function Welcome() {
  return (
    <div>
          <Navbar/>
          <h1 className="text-center text-3xl font-bold mt-24">Welcome    <UserName/> 
           to the Quiz App</h1>
          <p className="lead text-center  mt-10" >This is a simple quiz app that allows you to test  your knowledge <br/>  on different topics.</p>
          <div className='text-center mt-8 '>
          <Link href={'/quiz'} className='bg-green-600 text-white py-3 px-3  rounded-md hover:bg-green-800 '> Let&apos;s Start Quiz ⏩</Link>
          </div>
    </div>
  )
}
