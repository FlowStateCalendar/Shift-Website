"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuizStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, FlaskRound } from "lucide-react";
import Header from "@/components/header";

export default function Home() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) {
            return;
        }
        // Check if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return;
        }

        useQuizStore.getState().reset();
        useQuizStore.getState().setemail(email);
        useQuizStore.getState().setname(name);
        router.push("/quiz");
    };

    return (
        <div className="bg-background h-max flex flex-col justify-between">
            <Header />
            <section className="flex py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl pb-4 mb-6 ">
                        <b className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                                    <Label htmlFor="name" className="text-sm font-medium">
                                        Your Name
                                    </Label>
                                    <Input
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Jane Smith"
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
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="jane@example.com"
                                        className="mt-1"
                                    />
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

                    {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {features.map((feature, index) => (
              <Card key={index} className="bg-popover">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-popover rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-neutral-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
                </div>
                {/* <div>
          <img src="components\assets\quizImage.png" alt="Woman thinking about her tasks" width={500} height={500} />
        </div> */}
            </section>
            {/* <Footer /> */}
        </div>
    );
}
