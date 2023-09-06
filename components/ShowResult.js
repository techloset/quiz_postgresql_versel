"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function ShowResult() {
  
  const [totalScore, setTotalScore] = useState(null)
  const [question, setQuestion] = useState(null)
  useEffect(() => {
    setTotalScore(localStorage.getItem("totalScore"))
    setQuestion(localStorage.getItem("question"))
  }, []);

  return (
    <>
    <Navbar/>
    <div className="text-center ">
      <div>
        <h1 className="text-center my-8 font-bold text-3xl">Your Result</h1>
        <br />
      </div>

      <div className="flex justify-center">
      <div className="flex justify-center w-[100vh]">
        <div className="p-5 shadow lg:w-[90vh] lg:h-[50vh] md:h-[50vh] md:w-[70vh] sm:h-[50vh] bg-slate-300 lg:py-3 :lg:px-2 md:px-5 md:py-4 sm:py-3">
          <h1 className="text-xl my-4">
            Total Question = <span className="font-bold">{question}</span>
          </h1>
          <h1 className="text-xl my-4">
            Correct Answers = <span className="font-bold">{totalScore}</span>
          </h1>
          <h1 className="text-xl my-4">
            Your Score is <span className="font-bold">{totalScore}</span> out of <span className="font-bold">{question}</span>
          </h1>
          <br />
          <Link
            href={"/quiz"}
            className="mt-10   py-2 px-3 bg-blue-800 shadow-lg rounded-md text-white "
            >
            Play Again
          </Link>
        </div>
            </div>
      </div>
    </div>
    </>
  );
}
