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

    function nextQuestion(score: number) {
        useQuizStore.getState().addtoQuiz([
            {
                question: quizData[currentQuestionIndex].question,
                answer: score.toLocaleString(),
            },
        ]);
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    }

    function submitAnswer(finalanswer: string) {
        // Add the last question's answer to the quiz
        useQuizStore.getState().addtoQuiz([
            {
                question: quizData[currentQuestionIndex].question,
                answer: finalanswer,
            },
        ]);

        // Get the complete quiz data
        const store = useQuizStore.getState();

        // Calculate score client-side
        const score = store.quiz.reduce((acc, question) => {
            if (!isNaN(Number(question.answer))) {
                return acc + Number(question.answer);
            }
            return acc;
        }, 0);

        // Pass all data via URL params (encode quiz as JSON string)
        const params = new URLSearchParams({
            score: score.toString(),
            email: store.email,
            firstName: store.firstName,
            lastName: store.lastName,
            quiz: JSON.stringify(store.quiz), // Serialize quiz array
        });

        // Navigate to thank-you page - always succeeds
        router.push(`/thank-you?${params.toString()}`);
    }

    return (
        <div className="bg-background min-h-screen flex flex-col justify-between">
            <div className="flex flex-grow justify-center align-center text-center bg-gradient-to-b from-primary/5 to-background">
                <div className="flex flex-col items-center justify-center w-full md:w-2/3 max-w-md p-4 rounded-lg">
                    <div className="flex flex-row items-center justify-between w-full mb-4">
                        <div className="flex flex-col items-center w-full">
                            <h1 className="text-xl font-bold mb-2 w-full">Question {currentQuestionIndex + 1} of {quizData.length}</h1>
                            <Progress className="w-full" value={(currentQuestionIndex / quizData.length) * 100} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full bg-primary rounded-lg p-4">
                        <p className="text-background text-2xl mb-2">{quizData[currentQuestionIndex].question}</p>
                        {quizData[currentQuestionIndex].answerFormat == "ATNslider" ? (
                            <div className="flex flex-col items-center mt-10 w-full">
                                <div className="flex flex-row items-center justify-center w-full mb-4">
                                    <div className="flex flex-col items-center w-1/3">
                                        <Button className="hover:bg-background/75 bg-background text-foreground w-2/3 text-start mr-4" onClick={() => currentQuestionIndex<4 || currentQuestionIndex==6 || currentQuestionIndex==9 ? nextQuestion(0) : nextQuestion(1)}>
                                            Yes
                                        </Button>
                                    </div>
                                    <div className="flex flex-col items-center w-1/3">
                                        <Button className="hover:bg-background/75 bg-background text-foreground w-2/3 text-end ml-4" onClick={() => currentQuestionIndex<4 || currentQuestionIndex==6 || currentQuestionIndex==9 ? nextQuestion(1) : nextQuestion(0)}>
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
                                            className="hover:bg-background/75 bg-background text-foreground w-2/3 text-start mr-4"
                                            onClick={() => submitAnswer("Android")}
                                        >
                                            Android
                                        </Button>
                                    </div>
                                    <div className="flex flex-col items-center w-1/3">
                                        <Button 
                                            className="hover:bg-background/75 bg-background text-foreground w-2/3 text-start ml-4" 
                                            onClick={() => submitAnswer("Ios")}
                                        >
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
