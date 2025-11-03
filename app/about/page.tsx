/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card";
// import { Zap, Users, Shield, UserPlus } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function About() {
    // const values = [
    //     {
    //         title: "Empowerment",
    //         description: "Providing tools that build confidence and independence",
    //         icon: <Zap className="h-6 w-6" />,
    //         bgColor: "bg-blue-100",
    //         textColor: "text-primary-foreground",
    //     },
    //     {
    //         title: "Inclusivity",
    //         description: "Designing for diverse cognitive, sensory, and emotional experiences",
    //         icon: <UserPlus className="h-6 w-6" />,
    //         bgColor: "bg-green-100",
    //         textColor: "text-primary-foreground",
    //     },
    //     {
    //         title: "Trust",
    //         description: "Building technology with transparency and evidence-based approaches",
    //         icon: <Shield className="h-6 w-6" />,
    //         bgColor: "bg-purple-100",
    //         textColor: "text-primary-foreground",
    //     },
    //     {
    //         title: "Community",
    //         description: "Fostering connection and shared learning between users",
    //         icon: <Users className="h-6 w-6" />,
    //         bgColor: "bg-yellow-100",
    //         textColor: "text-primary-foreground",
    //     },
    // ];

    return (
        <section>
            <Header></Header>
            <div className="my-10 lg:px-0 md:px-4 px-2 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Shift Habits</h1>

                <div className="bg-primary text-primary-foreground rounded-xl shadow-md overflow-hidden mb-12">
                    <div className="md:flex">
                        <div className="md:w-1/2 bg-gray-200 h-64 md:h-auto">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                                alt="Diverse team collaborating"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8 md:w-1/2">
                            <h2 className="text-primary-foreground text-2xl font-semibold mb-4 text-center">
                                Our Mission
                            </h2>
                            <p className="mb-4">
                                Shift exists to unlock the full potential of neurodiverse minds. We believe everyone
                                deserves the tools to achieve their goals - no matter how their brain works.
                            </p>
                            <p className="">
                                That&apos;s why we&apos;re building a productivity tool designed for neurodivergent
                                thinkers, by neurodivergent thinkers. Instead of fighting against the challenges that
                                come with ADHD, autism, dyslexia and more, Shift turns them into strengths - helping
                                you build momentum, stay motivated, and actually reach the finish line.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card className="bg-secondary">
                        <CardContent className="p-8">
                            <h2 className="text-primary-foreground text-2xl font-semibold mb-4 text-center">
                                How Our App Works
                            </h2>
                            <p className="text-primary-foreground mb-4">
                                This means you get that dopamine hit even from small tasks such as brushing your teeth.
                                Points earned can be spent to upgrade your own aquarium. Shift uses rewards as a
                                form of motivation, when you complete any task you get a reward equal to the effort of
                                the task.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-accent">
                        <CardContent className="p-8">
                            <h2 className="text-primary-foreground text-2xl font-semibold mb-4 text-center">
                                What&apos;s Your Job
                            </h2>
                            <p className="text-primary-foreground mb-4">
                                Your only job? Show up as yourself. Shift isn&apos;t about fixing you - it&apos;s
                                about supporting how your brain already works.
                            </p>
                            <p className="text-primary-foreground">
                                Let us know what works for you and share your thoughts if you think there could be any
                                improvements, help us to build an app that will last.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* <div className="text-foreground p-8 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <div className="flex" key={index}>
                                <div
                                    className={`h-12 w-12 rounded-lg ${value.bgColor} flex items-center justify-center ${value.textColor} shrink-0`}
                                >
                                    {value.icon}
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold mb-1">{value.title}</h3>
                                    <p className="text-sm">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
            <Footer></Footer>
        </section>
    );
}
