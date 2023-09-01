"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import Navbar from "./Navbar";

const initialstate = {
  question: "",
  option1: "",
  option2: "",
  option3: "",
  correctOption: "",
  email: "",
};
export default function Addqes() {
  const { status, data: session } = useSession();
  const [state, setState] = useState(initialstate);

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = session?.user?.email;
    const { question, option1, option2, option3, correctOption } = state;
    try {
      const res = await fetch("/api/ques", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          option1,
          option2,
          option3,
          correctOption,
          email,
        }),
      });

      if (res.ok) {
        window.location.reload();
        window.notify("Your Question has been added", "success");
        return;
      } else {
        window.notify("Question Not added", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Add Quiz Question
        </h1>

        <div className="flex justify-center ">
          <div className="bg-gray-100 w-[110vh]  p-10 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="question"
                  className="block text-lg font-semibold mb-2"
                >
                  Question:
                </label>
                <textarea
                  required
                  onChange={handleChange}
                  id="question"
                  name="question"
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="option1" className="block font-semibold mb-2">
                  Option 1:
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  id="option1"
                  name="option1"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="option2" className="block font-semibold mb-2">
                  Option 2:
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  id="option2"
                  name="option2"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="option3" className="block font-semibold mb-2">
                  Option 3:
                </label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  id="option3"
                  name="option3"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="correctOption"
                  className="block font-semibold mb-2"
                >
                  Correct Option:
                </label>
                <input
                  required
                  type="text"
                  onChange={handleChange}
                  id="correctOption"
                  name="correctOption"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add Question
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
