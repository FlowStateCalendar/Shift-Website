"use client";
import Header from "@/components/header";
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

    const renderScoreMessage = () => {
        switch (scorelevel) {
            case "low":
                return (
                    <>
                        Your productivity score is <b className="text-accent">Low</b> at{" "}
                        <b className="text-accent">{score}</b>, giving you lots of opportunity for improvement.
                        <br />
                        <br />
                        The great news is, this has been time well spent as you have to be able to know your starting
                        point to make strides in the right direction. Congratulations on doing that today.
                    </>
                );
            case "medium":
                return (
                    <>
                        Your productivity score is <b className="text-accent">Medium</b> at{" "}
                        <b className="text-accent">{score}</b>, giving you great foundations and lots of opportunity for
                        improvement.
                        <br />
                        <br />
                        The great news is, this has been time well spent as you have to be able to know your starting
                        point to make strides in the right direction. Congratulations on doing that today.
                    </>
                );
            case "high":
                return (
                    <>
                        Your productivity score is <b className="text-accent">High</b> at{" "}
                        <b className="text-accent">{score}</b>, meaning you truly value your time and want to maximise
                        your efforts.
                        <br />
                        <br />
                        The great news is that this quiz has been time well spent as there is always room for
                        improvement. Congratulations on doing that today.
                    </>
                );
            default:
                return null; // While loading or invalid state
        }
    };

    return (
        <section>
            <Header />
            <div className="bg-background flex w-full h-screen flex-col items-center justify-start text-center">
                <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-4xl font-bold md:mb-2 lg:pt-10 p-4">
                    Thank you for taking the <br /> Neurodiverse Productivity Quiz
                </h1>
                <div className="flex items-center justify-center flex-col md:flex-row-reverse md:items-start">
                    <div className="lg:w-100 lg:h-80 md:w-80 md:h-60 w-70 md:p-8 p-6">
                        <RadialGraph score={score} scorelevel={scorelevel} />
                    </div>
                    <div className="text-center md:text-left flex flex-col items-left justify-center lg:w-1/3 md:w-1/2 w-full md:p-6 lg:p-8">
                        <p className="lg:text-md md:mb-5 md:p-0 p-2">{renderScoreMessage()}</p>
                        <p className="lg:text-md md:mb-5 md:p-0 mb-2 p-2">
                            We are developing an app to help with productivity. Check out some of the features below and
                            visit our about page (coming soon) to learn more. We are developing an app to help with
                            productivity. Check out some of the features below and visit our about page (coming soon) to
                            learn more.
                        </p>
                        <div className="text-left p-4 md:p-0">
                            <h1 className="text-accent lg:text-2xl mb-2">
                                Our
                                <b className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    Favourite 5 Features
                                </b>
                                of the app:
                            </h1>
                            <ul className="list-disc list-inside lg:text-md">
                                <li>
                                    <b>Goals</b> - Set your own or choose from the best pre-set goals for growth
                                </li>
                                <li>
                                    <b>Notifications</b> - Personalised reminders when it&apos;s time to work or
                                    complete a task
                                </li>
                                <li>
                                    <b>Focus</b> - Actually achieve your goals and avoid distractions with focus mode
                                </li>
                                <li>
                                    <b>Gamification</b> - Compete against your friends and create your own aquarium
                                </li>
                                <li>
                                    <b>Rewards</b> - Get rewarded for progress, even with the small wins
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="lg:text-md md:mb-5 md:p-0 mb-2 p-2">
                    <b>
                        If you want to really set the wheels in motion then FOLLOW US @Flowstate to stay up to date on
                        our progress!
                    </b>
                </p>
                {/* Add waitlist here */}
            </div>
            {/* <Footer />             */}
        </section>
    );
}
