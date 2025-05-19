"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useQuizStore } from "@/lib/store";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuizPage() {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // starting at question 0
    const quizData = [
        {
            answerFormat: "ATNslider",
            question: "Do you often forget tasks, appointments, or special dates?",
        },
        {
            answerFormat: "ATNslider",
            question: "Do you often feel overwhelmed or burnt out by your workload?",
        },
        {
            answerFormat: "ATNslider",
            question: "Do you set goals but struggle to follow through on them?",
        },
        {
            answerFormat: "ATNslider",
            question: "Do you struggle to concentrate on one task at a time?",
        },
        {
            answerFormat: "ATNslider",
            question: "Do you have a structured plan for your daily or weekly schedule?",
        },
        {
            answerFormat: "ATNslider",
            question: "Have you organised your notification settings on your devices?",
        },
        {
            answerFormat: "ATNslider",
            question: "Would earning points, tracking streaks, or hitting milestones motivate you to stay on track?",
        },
        {
            answerFormat: "ATNslider",
            question: "Do you often prioritise your mental and physical wellbeing (sleep, exercise and wellness)?",
        },
        {
            answerFormat: "ATNslider",
            question: "Do you take regular break whilst working?",
        },
        {
            answerFormat: "ATNslider",
            question: "Would having more balance, structure, and motivation transform your daily life?",
        },
        {
            answerFormat: "Device",
            question: "Which device type do you use most?",
        },
    ];

    // Doesnt handle the last question that is for submit answer
    function nextQuestion(score: number) {
        console.log("quizData", quizData);
        if (currentQuestionIndex != quizData.length) {
            useQuizStore.getState().addtoQuiz([
                {
                    question: quizData[currentQuestionIndex].question,
                    answer: score.toLocaleString(),
                },
            ]);
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    }

    function submitAnswer(finalanswer: string) {
        useQuizStore.getState().addtoQuiz([
            {
                question: quizData[currentQuestionIndex].question,
                answer: finalanswer,
            },
        ]);

        //todo make a page to add names and then submit
        if (useQuizStore.getState().name == "" || useQuizStore.getState().email == "") {
            alert("Please enter your name and email");
            return;
        }

        fetch("/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: useQuizStore.getState().email,
                name: useQuizStore.getState().name,
                quiz: useQuizStore.getState().quiz,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                router.push("/thank-you?score=" + data.score);
            });
    }

    return (
        <div className="bg-background min-h-screen flex flex-col justify-between">
            {/* <Header /> */}
            <div className="flex flex-grow justify-center align-center text-center bg-gradient-to-b from-primary/5 to-background">
                <div className="flex flex-col items-center justify-center w-full md:w-2/3 max-w-md p-4 rounded-lg">
                    <div className="flex flex-row items-center justify-between w-full mb-4">
                        <div className="flex flex-col items-center w-full">
                            <h1 className="text-xl font-bold mb-2 w-full">Question {currentQuestionIndex} of 10</h1>
                            <Progress className="w-full" value={currentQuestionIndex * 10} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full bg-muted rounded-lg p-4">
                        <p className="text-2xl mb-2">{quizData[currentQuestionIndex].question}</p>
                        {quizData[currentQuestionIndex].answerFormat == "ATNslider" ? (
                            <div className="flex flex-col items-center mt-10 w-full">
                                <div className="flex flex-row items-center justify-center w-full mb-4">
                                    <div className="flex flex-col items-center w-1/3">
                                        <Button className="w-2/3 text-start mr-4" onClick={() => currentQuestionIndex<4 ? nextQuestion(1) : nextQuestion(0)}>
                                            Yes
                                        </Button>
                                    </div>
                                    <div className="flex flex-col items-center w-1/3">
                                        <Button className="w-2/3 text-end ml-4" onClick={() => currentQuestionIndex<4 ? nextQuestion(0) : nextQuestion(1)}>
                                            No
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center mt-10 w-full">
                                <div className="flex flex-row items-center justify-center w-full mb-4">
                                    <div className="flex flex-col items-center w-1/3">
                                        <Button
                                            className="w-2/3 text-start mr-4"
                                            onClick={() => submitAnswer("Android")}
                                        >
                                            Android
                                        </Button>
                                    </div>
                                    <div className="flex flex-col items-center w-1/3">
                                        <Button className="w-2/3 text-start ml-4" onClick={() => submitAnswer("Ios")}>
                                            iOS
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
