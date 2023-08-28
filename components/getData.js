"use client"

import { useEffect, useState } from "react";


export default function GetData() {



    const [questions, setQuestions] = useState([]);
   

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/ques', { cache: "no-store" });
                if (!res.ok) {
                    throw new Error('Failed to Fetch Question');
                }
                const json = await res.json();
                setQuestions(json.map(q => ({ ...q, selectedOption: null })));
            } catch (error) {
                console.log(error);
            }
        }

        getQuestions();
    }, []);

    let answers = []
    const checkQuiz = (selectedOption, correctOption, questionId) => {
        var indexExist = false
        var indexOfQuestion;
        answers.forEach((element, index) => {
            if (element[2] == questionId) {
                indexExist = true;
                indexOfQuestion = index;
            }
        });
        if (indexExist == false) {
            answers.push([selectedOption, correctOption, questionId])
        } else {
            answers[indexOfQuestion][0] = selectedOption;

        }

    }
    
    //     if (questions.some(q => q._id === questionId && q.selectedOption === null)) {
    //         const isCorrect = selectedOption === correctOption;
    //         if (isCorrect) {
    //             setScore(prevScore => prevScore + 1);
    //         }

    //         // Update the selected option for the question to prevent further changes
    //         setQuestions(prevQuestions =>
    //             prevQuestions.map(q =>
    //                 q._id === questionId
    //                     ? { ...q, selectedOption }
    //                     : q
    //             )
    //         );
    //     }
    // };

    const calculateResult = (e) => {
        var totalScore = 0;
        e.preventDefault();
        answers.forEach(answer => {
            if (answer[0] == answer[1]) {
                totalScore += 1;
            }
        });
         alert(`You Correct answer is  ${totalScore} Out of  ${questions.length} `)
         window.location.reload()
    };

    return (
        <>
            {questions.length > 0 ? (
                <>
                    {questions.map((q) => (
                        <div key={q._id} className="mt-16 w-11/12 mx-auto p-8">
                            <div className="bg-gray-100 p-11 rounded-lg shadow-xl">
                                <h2 className="text-2xl font-semibold mb-2">Q: {q.question}</h2>
                                <div className="space-y-2 text-lg">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name={q._id}
                                            value={q.option1}
                                            onClick={() => { checkQuiz(q.option1, q.correctOption, q._id) }}
                                            className="mr-2"
                                        />
                                        {q.option1}
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name={q._id}
                                            value={q.option2}
                                            onClick={() => { checkQuiz(q.option2, q.correctOption, q._id) }}
                                            className="mr-2"
                                        />
                                        {q.option2}
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name={q._id}
                                            value={q.option3}
                                            onClick={() => { checkQuiz(q.option3, q.correctOption, q._id) }}
                                            className="mr-2"
                                        />
                                        {q.option3}
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="text-center">
                        <button type="button" className="my-10 bg-blue-500 py-2 px-3 shadow rounded-md text-white" onClick={calculateResult}>Submit</button>
                    </div>
                </>
            ) : (
                <p>You have no questions Yet!.</p>
            )}


        </>

    );
}
