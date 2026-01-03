/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import Header from "@/components/header";
import { RadialGraph } from "../../components/radial-graph";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { toast } from "sonner";

export default function ThankYou() {
    const [score, setScore] = useState(0);
    const [scoreLevel, setScoreLevel] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isInMailchimp, setIsInMailchimp] = useState(false);
    const [isCheckingMailchimp, setIsCheckingMailchimp] = useState(true);

    // Save quiz results to database (non-blocking)
    const saveToDatabase = async (
        email: string,
        firstName: string,
        lastName: string,
        quiz: { question: string; answer: string }[]
    ) => {
        if (!email || !firstName || !lastName || !quiz || quiz.length === 0) {
            return;
        }

        try {
            await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    firstName,
                    lastName,
                    quiz,
                }),
            });
            // Silently succeed or fail - don't block user experience
        } catch (error) {
            console.error("Failed to save quiz to database:", error);
            // Silently fail - don't show error to user
        }
    };

    // Check if email exists in Mailchimp
    const checkMailchimpStatus = async (email: string) => {
        if (!email) {
            setIsCheckingMailchimp(false);
            return;
        }

        try {
            const res = await fetch("/api/check-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            setIsInMailchimp(data.exists || false);
        } catch (error) {
            console.error("Failed to check Mailchimp status:", error);
            // If check fails, assume not in Mailchimp (allow them to try joining)
            setIsInMailchimp(false);
        } finally {
            setIsCheckingMailchimp(false);
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const rawScore = Number(searchParams.get("score"));
        const scaledScore = rawScore * 10;
        const email = searchParams.get("email") || "";
        const first = searchParams.get("firstName") || "";
        const last = searchParams.get("lastName") || "";
        const quizParam = searchParams.get("quiz") || "";

        setScore(scaledScore);
        setUserEmail(email);
        setFirstName(first);
        setLastName(last);

        if (scaledScore < 50) {
            setScoreLevel("Low");
        } else if (scaledScore < 80) {
            setScoreLevel("Medium");
        } else {
            setScoreLevel("High");
        }

        // Parse quiz data and save to database (non-blocking)
        if (quizParam) {
            try {
                const quiz = JSON.parse(decodeURIComponent(quizParam));
                // Save to database in background - don't await
                saveToDatabase(email, first, last, quiz);
            } catch (error) {
                console.error("Failed to parse quiz data:", error);
            }
        }

        // Check Mailchimp status
        if (email) {
            checkMailchimpStatus(email);
        } else {
            setIsCheckingMailchimp(false);
        }
    }, []);

    const renderScoreMessage = () => {
        switch (scoreLevel) {
            case "Low":
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
            case "Medium":
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
            case "High":
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

    const handleWaitlist = (e: React.FormEvent<HTMLFormElement>) => {
        // If already in Mailchimp, prevent submission and show message
        if (isInMailchimp) {
            e.preventDefault();
            toast("You're already on the waitlist!");
            return;
        }
        // If not in Mailchimp, allow form submission to proceed
        toast("✓ Successfully added to the waitlist!");
    };

    return (
        <section>
            <Header />
            <div className="bg-background flex w-full h-screen flex-col items-center justify-start text-center">
                <h1 className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent text-4xl font-bold md:mb-2 lg:pt-10 p-4">
                    Thank you for taking the <br /> Neurodiverse Productivity Quiz
                </h1>
                <div className="flex items-center justify-center flex-col md:flex-row-reverse md:items-start">
                    <div className="lg:w-100 lg:h-80 md:w-80 md:h-60 w-70 md:p-8 p-6">
                        <RadialGraph score={score} scorelevel={scoreLevel} />
                    </div>
                    <div className="text-center md:text-left flex flex-col items-left justify-center lg:w-1/3 md:w-1/2 w-full md:p-6 lg:p-8">
                        <p className="lg:text-md md:mb-5 md:p-0 p-2">{renderScoreMessage()}</p>
                        <p className="lg:text-md md:mb-5 md:p-0 mb-2 p-2">
                            We are developing an app to help with productivity. Check out some of the features below and
                            visit our{" "}
                            <a className="hover:underline" href="/about">
                                about page
                            </a>{" "}
                            to learn more.
                        </p>
                        <div className="text-left p-4 md:p-0">
                            <h1 className="text-accent lg:text-2xl mb-2">
                                Our <b className="text-accent">Favourite 5 Features</b> of the app:
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
                        If you want to really set the wheels in motion then FOLLOW @ShiftHabits and @rhysesummers on LinkedIn and socials to stay up to date with
                        our progress!
                    </b>
                </p>
                <form
                    action="https://app.us17.list-manage.com/subscribe/post?u=9551a10a035942f6b4b9c76b4&id=551ba4d276"
                    method="POST"
                    target="_blank"
                    onSubmit={handleWaitlist}
                >
                    <input type="hidden" name="EMAIL" value={userEmail} />
                    <input type="hidden" name="FNAME" value={firstName} />
                    <input type="hidden" name="LNAME" value={lastName} />
                    {/* Honeypot - Mailchimp compliance */}
                    <input
                        type="text"
                        name="b_9551a10a035942f6b4b9c76b4_551ba4d276"
                        tabIndex={-1}
                        autoComplete="off"
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                        value=""
                        readOnly
                    />
                    <Button
                        type="submit"
                        disabled={isCheckingMailchimp || isInMailchimp}
                        className="px-8 py-7 text-xl font-bold bg-primary hover:bg-primary/90 rounded-full shadow-lg transition transform hover:-translate-y-1 focus:ring-4 focus:ring-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isCheckingMailchimp
                            ? "Checking..."
                            : isInMailchimp
                              ? "Already on Waitlist"
                              : "Join the Waitlist"}
                    </Button>
                </form>
            </div>
            <Footer />
        </section>
    );
}
