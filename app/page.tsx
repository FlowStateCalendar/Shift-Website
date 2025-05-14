"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuizStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, FlaskRound } from "lucide-react";
import Footer from "@/components/footer";
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

  const features = [
    {
      title: "Personalized Insights",
      description:
        "Get a detailed report about your neurodiverse strengths and areas for growth based on our comprehensive assessment.",
      icon: <Heart className="fg-popover bg-popover" />,
      bgColor: "bg-blue-100",
    },
    {
      title: "Community Connection",
      description:
        "Join groups with similar profiles to share experiences, strategies, and support for common challenges.",
      icon: <Users className="fg-popover bg-popover" />,
      bgColor: "bg-green-100",
    },
    {
      title: "Research-Backed Tools",
      description:
        "Access strategies and resources developed by experts in neurodiversity, designed for real-world application.",
      icon: <FlaskRound className="fg-popover bg-popover" />,
      bgColor: "bg-purple-100",
    },
  ];
  return (
    <div className="bg-background min-h-screen flex flex-col justify-between">
      <Header />
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold pb-4 mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Supporting Neurodiversity Through Technology
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            NeuroApp helps neurodiverse individuals discover their strengths,
            understand their patterns, and connect with supportive communities.
          </p>

          <Card className="max-w-md mx-auto mb-8 border-primary/10 shadow-md">
            <CardContent className="pt-6">
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

                <div className="text-left mb-4">
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {features.map((feature, index) => (
              <Card key={index} className="bg-popover">
                <CardContent className="p-6">
                  <div
                    className={`h-12 w-12 bg-popover rounded-lg flex items-center justify-center mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-neutral-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
