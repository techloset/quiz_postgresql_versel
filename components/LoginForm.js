"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        return window.notify('Invalid Credentials', 'error')
        
      }
      router.push("/quiz");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
    <div className="shadow-lg p-5 md:p-10   rounded-lg border-t-4 flex flex-col md:flex-row justify-center border-green-400">
        <div className="md:mr-10 md:mt-5">
            <Image height={600} width={300} src='/welcome Quiz.jpg' alt="Welcome" className="hidden md:block" />
        </div>
        <div className="md:w-1/2">
            <h1 className="text-xl font-bold my-4">Login</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input required className='py-1 px-3 rounded-sm border border-gray-500'
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                />
                <input required className='py-1 px-3 rounded-sm border border-gray-500'
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
                    Login
                </button>
                     <Link className="text-sm mt-3 text-right" href={"/register"}>
                    Dont have an account? <span className="underline">Register</span>
                </Link>
            </form>
        </div>
    </div>
</div>

  );
}
