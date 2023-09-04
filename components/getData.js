"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";

export default function GetData() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const res = await fetch("/api/ques", { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Failed to Fetch Question");
        }
        const json = await res.json();
        setQuestions(json.map((q) => ({ ...q, selectedOption: null })));
      } catch (error) {
        console.log(error);
      }
    };

    getQuestions();
  }, []);

  let answers = [];
  const checkQuiz = (selectedOption, correctOption, questionId) => {
    var indexExist = false;
    var indexOfQuestion;
    answers.forEach((element, index) => {
      if (element[2] == questionId) {
        indexExist = true;
        indexOfQuestion = index;
      }
    });
    if (indexExist == false) {
      answers.push([selectedOption, correctOption, questionId]);
    } else {
      answers[indexOfQuestion][0] = selectedOption;
    }
  };

  const calculateResult = (e) => {
    var totalScore = 0;
    e.preventDefault();
    answers.forEach((answer) => {
      if (answer[0] == answer[1]) {
        totalScore += 1;
      }
    });
    const question = questions.length;

    if (questions.length === answers.length) {
      localStorage.setItem("totalScore", totalScore);
      localStorage.setItem("question", question);
      router.push(`/result`);
    } else {
      window.notify("Please answer all questions", "error");
    }
  };

  return (
    <>
      <Navbar />
      {questions.length > 0 ? (
        <>
          {questions.map((q, i) => (
            <div key={i} className="w-11/12 sm:w-11/12 mx-auto p-8">
              <div className="bg-gray-100 p-8 sm:p-11 rounded-lg shadow-xl">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Q: {q.question}
                </h2>
                <div className="space-y-2 text-base sm:text-lg">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={q.id}
                      value={q.option1}
                      onClick={() => {
                        checkQuiz(q.option1, q.correctOption, q.id);
                      }}
                      className="mr-2"
                    />
                    {q.option1}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={q.id}
                      value={q.option2}
                      onClick={() => {
                        checkQuiz(q.option2, q.correctOption, q.id);
                      }}
                      className="mr-2"
                    />
                    {q.option2}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={q.id}
                      value={q.option3}
                      onClick={() => {
                        checkQuiz(q.option3, q.correctOption, q.id);
                      }}
                      className="mr-2"
                    />
                    {q.option3}
                  </label>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center">
            <button
              onClick={calculateResult}
              type="button"
              className="my-6 sm:my-10 bg-blue-500 py-2 px-4 sm:px-6 shadow rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </>
      ) : (
        <div className="text-center my-10 flex items-center justify-center mt-[50vh]">
          <div
            className="text-center inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
    </>
  );
}
