"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useQuizStore } from "@/lib/store";
import { useState } from "react";
import useSWR from "swr/immutable";
import { useRouter } from "next/navigation";

export default function QuizPage() {
    const router = useRouter();
    const [value, setValue] = useState([2]); // starting at step 2 of 5
    const handleReset = () => setValue([2]); // reset to 0
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // starting at question 0

    const fetchQuestions = async () => {
        const res = await fetch("/api/get-quiz");
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        return JSON.parse(data);
    };

    // Doesnt handle the last question that is for submit answer
    function nextQuestion() {
        console.log("quizData", quizData);
        if (currentQuestionIndex != quizData.length) {
            useQuizStore
                .getState()
                .addtoQuiz([
                    { question: quizData.questions[currentQuestionIndex].question, answer: value[0].toLocaleString() },
                ]);
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            handleReset();
        }
    }

    function submitAnswer(finalanswer: string) {
        useQuizStore
            .getState()
            .addtoQuiz([{ question: quizData.questions[currentQuestionIndex].question, answer: finalanswer }]);

        fetch("/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: useQuizStore.getState().email,
                quiz: useQuizStore.getState().quiz,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                router.push("/thank-you?score=" + data.score);
            });
    }

    const { data: quizData, error } = useSWR("/api/get-quiz", fetchQuestions);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            {quizData ? (
                <div className="flex flex-col items-center justify-center w-2/3 max-w-md p-4 rounded-lg">
                    <p className="text-lg mb-2">{quizData.questions[currentQuestionIndex].question}</p>
                    {quizData.questions[currentQuestionIndex].answerFormat == "ATNslider" ? (
                        <div className="flex flex-col items-center mt-10 w-full">
                            <div className="flex flex-row items-center w-full mb-4">
                                <div className="w-1/3 text-start">Not at all</div>
                                <div className="w-1/3 text-center">Somewhat</div>
                                <div className="w-1/3 text-end">Very much</div>
                            </div>

                            <Slider defaultValue={[2]} max={4} step={1} value={value} onValueChange={setValue} />
                            <div>
                                <Button onClick={nextQuestion} className="mt-4">
                                    Next Question
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center mt-10 w-full">
                            <div className="flex flex-row items-center justify-center w-full mb-4">
                                <Button
                                    onClick={() => {
                                        submitAnswer("Android");
                                    }}
                                    className="m-4 "
                                >
                                    Android
                                </Button>{" "}
                                <Button
                                    onClick={() => {
                                        submitAnswer("Ios");
                                    }}
                                    className="m-4"
                                >
                                    Ios
                                </Button>{" "}
                                <Button
                                    onClick={() => {
                                        submitAnswer("Windows");
                                    }}
                                    className="m-4"
                                >
                                    Windows
                                </Button>
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col items-center"></div>
                </div>
            ) : (
                <>
                    {error ? (
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <p className="text-lg mb-5">Error fetching quiz data</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <p className="text-lg mb-5">Loading quiz data...</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
