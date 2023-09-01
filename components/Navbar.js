"use client";
import Link from "next/link";
import SignOutbtn from "./SignOutbtn";
import UserName from "./UserName";
export default function Navbar() {
  return (
    <header className="text-white body-font bg-black">
      <div className="container mx-auto flex flex-wrap py-3 px-3 flex-col md:flex-row items-center">
        <Link href={"/quiz"} className="ml-3 text-white text-xl">
          👩‍🎓 QuizApp
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5">
            Hi <UserName />
            👋
          </a>
        </nav>
        <SignOutbtn />
        <Link
          href={"/addquestion"}
          className="inline-flex mx-3 items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0"
        >
          Add Question
        </Link>
      </div>
    </header>
  );
}
