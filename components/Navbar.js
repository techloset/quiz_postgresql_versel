"use client";
import Link from "next/link";
import SignOutbtn from "./SignOutbtn";
import UserName from "./UserName";
import { useSession } from "next-auth/react";
export default function Navbar() {
  const {status} = useSession()
  return (
    <header className="text-white body-font bg-black">
      <div className="w-full justify-center   container mx-auto flex flex-wrap py-3 lg:px-4 md:px-2 sm:flex-col md:flex-row items-center">
        <Link href={"/quiz"} className="lg:ml-10 text-white text-xl lg:mt-0 md:mt-0 mt-[9px]">
          👩‍🎓 QuizApp
        </Link>
        <nav className=" md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mx-5 lg:mt-1 md:mt-0 sm:my-2 ml-10 mt-[10px]  ">
            {status && <> Hi <UserName /> 👋</> }
          </a>
        </nav>
        <SignOutbtn  className='-mt-2'/>
        <Link
          href={"/addquestion"}
          className=" justify-center  mx-3 flex lg:mx-10 md:mx-5  sm:mx-3 lg:items-center md:items-end bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0"
        >
          Add Question
        </Link>
      </div>
    </header>
  );
}
