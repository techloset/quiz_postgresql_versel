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
            <h1 className="text-center font-bold text-xl mt-10"> Questions You can Edit or Delete</h1>
            {state.length > 0 ? (
                state.map((q, i) => (
                    <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-4 sm:mt-8 md:mt-16 mx-auto">
                    <div className="bg-gray-100 p-4 md:p-6 lg:p-8 rounded-lg shadow-xl">
                        <div className="m-3 font-bold text-lg md:text-xl lg:text-2xl"></div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                            Q {i + 1}: {q.question}
                        </h2>
                        <div className="space-y-2 text-base md:text-lg lg:text-xl">
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

                <div className="text-center my-10 ">
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
