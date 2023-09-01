"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => { 
    e.preventDefault();

    if (!name || !email || !password) {
      return window.notify("All Fields are Requried ❗", "error");
    }
    // console.log(name, email, password)
    // window.notify('User Register ', 'success')
    //  router.push('/welcome')

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        return window.notify("User already exists.", "error");
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
        window.notify('Registration successful','success')
        router.push("/welcome");
      } else {
        window.notify("User registration failed.",'error');
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="md:m-5 sm:m-10 lg:m-10 shadow-lg p-5 rounded-lg border-t-4 border-green-400 flex flex-col md:flex-row">
        <div className="md:w-1/2 sm:w-1/2">
          <h1 className="text-xl font-bold my-4">Register To Start Quiz</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input required className='py-1 px-3 rounded-sm border border-gray-500'
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
            <input required className='py-1 px-3 rounded-sm border border-gray-500'
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input required className='py-1 px-3 rounded-sm border border-gray-500'
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
              Register
            </button>

            <Link className="text-sm mt-3 text-right" href={"/"}>
              Already have an account? <span className="underline">Login</span>
            </Link>
          </form> 
        </div>
        <div className="hidden md:block ml-10 mt-14">
          <img src="/welcome Quiz.jpg" alt="Welcome" className="" />
        </div>
      </div>
    </div>
  );
}
