import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface HeroProps {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

export default function Hero() {

  return (
    <section className="bg-white">
      <Header></Header>
      <div className="flex justify-center h-screen">
        <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
          <div className="flex flex-col gap-7 lg:w-2/3">
            <h2 className="text-5xl font-semibold text-white md:text-5xl lg:text-8xl">
              <span>Epic Blocks</span>
              <span className="text-sidebar-primary"> built with shadcn/ui & Tailwind</span>
            </h2>
            <p className="text-base text-sidebar-accent md:text-lg lg:text-xl">
              Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.
            </p>
            <div className="flex flex-wrap items-start gap-5 lg:gap-7">
              <Button asChild>
                <a href="#">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="size-4" />
                  </div>
                  <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                    Join the waitlist
                  </span>
                </a>
              </Button>
              <Button asChild variant="link" className="underline">
                <a href="#">Find out more</a>
              </Button>
            </div>
          </div>
          <div className="relative z-10">
            <div className="absolute top-2.5 !left-1/2 !h-[92%] !w-[69%] -translate-x-[52%] overflow-hidden rounded-[35px]">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-dark-7-tall.svg"
                alt="Placeholder"
                className="size-full object-cover object-[50%_0%]"
              />
            </div>
            <img
              className="relative z-10"
              src="https://shadcnblocks.com/images/block/mockups/phone-2.png"
              width={450}
              height={889}
              alt="iphone"
            />
          </div>
        </div>
      </div>
      <div className="bg-chart-5 w-full h-screen">
        <h1></h1>

      </div>
      <Footer></Footer>
    </section>
  );
};

