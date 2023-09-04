"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false)

  const router = useRouter();

  const handleSubmit = async (e) => { 
    e.preventDefault();

    if (!name || !email || !password) {
       toast.error("All Fields are Requried ❗");
       return
    }
    else if(password.length<6){
        toast.error('Password Should at least 6 characters')
        return
    } 
    
    

    try {
      setisLoading(true)
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setisLoading(false)
        return toast.error("User already exists.");
        
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        toast.success('Registration successful','success')
        router.push("/quiz");
        setisLoading(false)
      } else {
        toast.error("User registration failed.",'error');
      }
    } catch (error) {
      console.log("Error during registration: ", error);
      setisLoading(false)
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="md:m-5 sm:m-10 lg:m-10 shadow-lg p-5 rounded-lg border-t-4 border-green-400 flex flex-col md:flex-row">
        <div className="md:w-1/2 sm:w-1/2">
          <h1 className="text-xl font-bold my-4">Register To Start Quiz</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input  className='focus:outline-none py-1 px-3 rounded-md border border-gray-500'
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
            <input  className='focus:outline-none py-1 px-3 rounded-md border border-gray-500'
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input   className='focus:outline-none  py-1 px-3 rounded-md border border-gray-500'
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password at least 6 characters"
            />
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
              {isLoading ? "Register..." : 'Register'}
              
            </button>

            <Link className="text-sm mt-3 text-right" href={"/login"}>
              Already have an account? <span className="underline">Login</span>
            </Link>
          </form> 
        </div>
        <div className="hidden md:block ml-10 mt-14">
          <Image height={600} width={300} src="/welcome Quiz.jpg" alt="Welcome" className="" />
        </div>
      </div>
    </div>
  );
}
