"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuizStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";

export default function Home() {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    // Validate email format
    const isValidEmailFormat = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!firstName || !lastName || !email) {
            return;
        }

        // Validate email format
        if (!isValidEmailFormat(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }

        // Proceed with quiz
        useQuizStore.getState().reset();
        useQuizStore.getState().setemail(email);
        useQuizStore.getState().setfirstName(firstName);
        useQuizStore.getState().setlastName(lastName);
        router.push("/quiz");
    };

    return (
        <section>
            <Header/>
            <div className="bg-background h-max py-12 md:py-20 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl pb-4 mb-6 ">
                    <b className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                        Neurodivergent
                    </b>{" "}
                    and <b className="text-accent">struggling</b> to achieve your goals?
                </h1>
                <p className="text-2xl mb-8 max-w-2xl mx-auto">
                    This 60 second quiz has been
                    <br /> designed to highlight areas of strength and weakness <br /> when it comes to how you use
                    your time. <br /> <br />{" "}
                    <b>
                        Want to discover how you can <br /> achieve more of the goals you set?
                    </b>
                </p>

                <Card className="max-w-md mx-auto mb-8 border-primary/10 shadow-md mt-10 m-2 sm:m-auto">
                    <h1 className="text-lg">
                        <b>Enter your details to get started!</b>
                    </h1>
                    <CardContent className="">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="text-left">
                                <Label htmlFor="firstName" className="text-sm font-medium">
                                    First Name
                                </Label>
                                <Input
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Jane"
                                    className="mt-1"
                                />
                            </div>

                            <div className="text-left">
                                <Label htmlFor="lastName" className="text-sm font-medium">
                                    Last Name
                                </Label>
                                <Input
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Smith"
                                    className="mt-1"
                                />
                            </div>

                            <div className="text-left mb-6">
                                <Label htmlFor="email" className="text-sm font-medium">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        // Clear error when user starts typing
                                        if (emailError) {
                                            setEmailError("");
                                        }
                                    }}
                                    placeholder="jane@example.com"
                                    className={`mt-1 ${emailError ? "border-destructive" : ""}`}
                                />
                                {emailError && (
                                    <p className="text-sm text-destructive mt-1">{emailError}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="px-8 py-7 text-xl font-bold bg-primary hover:bg-primary/90 rounded-full shadow-lg transition transform hover:-translate-y-1 focus:ring-4 focus:ring-primary/30 w-full"
                                size="lg"
                            >
                                Take the Quiz
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                {/* <div>
                <img src="components\assets\quizImage.png" alt="Woman thinking about her tasks" width={500} height={500} />
                </div> */}
            </div>
            {/* <Footer /> */}
        </section>
    );
}
