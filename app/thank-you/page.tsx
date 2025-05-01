"use client";
import { RadialGraph } from "../../components/radial-graph";
import { useEffect, useState } from "react";

export default function ThankYou() {
    const [score, setScore] = useState(0);
    const [scorelevel, setScoreLevel] = useState("");

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const score = Number(Number(searchParams.get("score")) * 2.5);
        console.log("score", score);
        let scorelevel = "";
        if (score < 50) {
            scorelevel = "low";
        } else if (score < 80) {
            scorelevel = "medium";
        } else {
            scorelevel = "high";
        }
        setScore(score);
        setScoreLevel(scorelevel);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <div className="flex flex-col items-center justify-center w-1/2 h-screen">
                <h1 className="text-4xl font-bold">Thank you for taking the</h1>
                <h1 className="text-4xl font-bold mb-10">Neurodiverse Productivity Quiz</h1>
                <div className="flex flex-col md:flex-row items-center justify-center mt-4">
                    <div className="flex flex-col items-center justify-center w-[500]">
                        <p className="text-lg mb-5">
                            Your productivity score is {scorelevel} at {score} giving you great foundations and lots of
                            opportunity for improvement
                        </p>

                        <p className="text-lg mb-5">
                            The great news is, this has been time well spent as you have to be able to know your
                            starting point to make strides in the right direction. Congratulations on doing that today.
                        </p>

                        <div className="flex flex-col items-center justify-center mb-5 w-2/3">
                            <h1 className="text-blue-300 text-xl">
                                Our <b>Favourite 4 Features</b> of the app:
                            </h1>
                            <ul className="list-disc text-lg">
                                <li>Personalised productivity tips</li>
                                <li>Neurodiverse friendly design</li>
                                <li>Gamified experience</li>
                                <li>Community support</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex pl-10 w-72 justify-center align-center">
                        <RadialGraph score={score} scorelevel={scorelevel} />
                    </div>
                </div>
            </div>
        </div>
    );
}
