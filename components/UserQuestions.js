'use client'

import { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

export default function UserQuestions() {
    const [state, setState] = useState([])

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const res = await fetch('/api/ques', { cache: "no-store" });
                if (!res.ok) {
                    throw new Error('Failed to Fetch Question');
                }
                const json = await res.json();
                setState(json)
            } catch (error) {
                console.log(error);
            }
        }

        getQuestions();
    }, []);



    return (
        <>
            <h1 className="text-center font-bold text-3xl mt-10">Your Questions</h1>
            {state.length > 0 ? (
                state.map((q, i) => (
                    <div key={i} className="mt-16 w-11/12 mx-auto">
                        <div className="bg-gray-100 p-11 rounded-lg shadow-xl">
                            <div className="m-3 font-bold text-xl"></div>
                            <h2 className="text-2xl font-semibold mb-2">Q {i + 1}: {q.question}</h2>
                            <div className="space-y-2 text-lg">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name={q._id}
                                        value={q.option1}
                                        className="mr-2"
                                    />
                                    {q.option1}
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name={q._id}
                                        value={q.option2}
                                        className="mr-2"
                                    />
                                    {q.option2}
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name={q._id}
                                        value={q.option3}
                                        className="mr-2"
                                    />
                                    {q.option3}
                                </label>
                                <div className="text-end">
                                    <Link href={`/editQuestion/${q.id}`} className="py-2 px-2 bg-blue-400 mx-2 text-white rounded-md">
                                        Edit
                                    </Link>
                                    <RemoveBtn id={q.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (

                <div className="text-center my-10">
                <div
                    className="text-center inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span
                    >
                </div>
                    </div>
            )}
        </>


    )
}
