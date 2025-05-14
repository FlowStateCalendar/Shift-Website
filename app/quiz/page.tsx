"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useQuizStore } from "@/lib/store";
import { useState } from "react";
import useSWR from "swr/immutable";
import { useRouter } from "next/navigation";
import Header from "@/components/header";

export default function QuizPage() {
  const router = useRouter();
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
  function nextQuestion(score: number) {
    console.log("quizData", quizData);
    if (currentQuestionIndex != quizData.length) {
      useQuizStore.getState().addtoQuiz([
        {
          question: quizData.questions[currentQuestionIndex].question,
          answer: score.toLocaleString(),
        },
      ]);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  }

  function submitAnswer(finalanswer: string) {
    useQuizStore.getState().addtoQuiz([
      {
        question: quizData.questions[currentQuestionIndex].question,
        answer: finalanswer,
      },
    ]);

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

  const { data: quizData, error } = useSWR("/api/get-quiz", fetchQuestions);

  return (
    <div className="bg-background min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex flex-grow justify-center align-center text-center bg-gradient-to-b from-primary/5 to-background">
        {quizData ? (
          <div className="flex flex-col items-center justify-center w-2/3 max-w-md p-4 rounded-lg">
            <div className="flex flex-row items-center justify-between w-full mb-4">
              <div className="flex flex-col items-center w-full">
                <h1 className="text-xl font-bold mb-2 w-full">
                  question {currentQuestionIndex} out of 10
                </h1>
                <Slider
                  className="w-full"
                  value={[currentQuestionIndex]}
                  step={1}
                  max={10}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full bg-border rounded-lg p-4">
              <p className="text-2xl mb-2">
                {quizData.questions[currentQuestionIndex].question}
              </p>
              {quizData.questions[currentQuestionIndex].answerFormat ==
              "ATNslider" ? (
                <div className="flex flex-col items-center mt-10 w-full">
                  <div className="flex flex-row items-center w-full mb-4">
                    <div className="flex flex-col items-center w-1/3">
                      <Button
                        className="w-2/3 text-start mr-4"
                        onClick={() => nextQuestion(0)}
                      >
                        Not at all
                      </Button>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                      <Button
                        className="w-2/3 text-center ml-4 mr-4"
                        onClick={() => nextQuestion(2)}
                      >
                        Somewhat
                      </Button>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                      <Button
                        className="w-2/3 text-end ml-4"
                        onClick={() => nextQuestion(4)}
                      >
                        Very much
                      </Button>
                    </div>
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
            </div>
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
    </div>
  );
}
