"use client";
import Header from "@/components/header";
import { RadialGraph } from "../../components/radial-graph";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";

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
        <section>
            {/* <Header /> */}
                <div className="flex w-full h-screen flex-col items-center justify-center text-center">
                    <h1 className="text-primary text-4xl font-bold md:mb-10">Thank you for taking the <br/> Neurodiverse Productivity Quiz</h1>
                    <div className="flex items-center justify-center flex-col md:flex-row-reverse md:items-start">
                        <div className="lg:w-100 lg:h-80 md:w-80 md:h-60 w-70 md:p-8 p-6">
                            <RadialGraph score={score} scorelevel={scorelevel} />
                        </div>
                        <div className="text-center md:text-left flex flex-col items-left justify-center lg:w-1/3 md:w-1/2 w-full md:p-6 lg:p-8">
                            <p className="lg:text-lg md:mb-5 md:p-0 p-2">
                                Your productivity score is {scorelevel} at {score} giving you great foundations and lots of
                                opportunity for improvement
                            </p>

                            <p className="lg:text-lg md:mb-5 md:p-0 mb-2 p-2">
                                The great news is, this has been time well spent as you have to be able to know your
                                starting point to make strides in the right direction. Congratulations on doing that today.
                            </p>
                            <h1 className="text-blue-300 lg:text-xl">
                                Our <b>Favourite 4 Features</b> of the app:
                            </h1>
                            <ul className="list-disc list-inside lg:text-lg">
                                <li>Personalised productivity tips</li>
                                <li>Neurodiverse friendly design</li>
                                <li>Gamified experience</li>
                                <li>Community support</li>
                            </ul>   
                        </div>
                        
                    </div>
                </div>
            {/* <Footer />             */}
        </section>
    );
}
