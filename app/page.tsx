"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";
import { Modal } from "@/components/modal";

// interface HeroProps {
//   heading?: string;
//   subheading?: string;
//   description?: string;
//   image?: {
//     src: string;
//     alt: string;
//   };
//   buttons?: {
//     primary?: {
//       text: string;
//       url: string;
//     };
//     secondary?: {
//       text: string;
//       url: string;
//     };
//   };
// }

export default function Hero() {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <section>
            <Header></Header>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
            <div className="flex justify-center h-screen bg-sky-300">
                <div className="container flex flex-col items-center justify-center gap-10 lg:my-0 lg:flex-row">
                    <div className="flex flex-col gap-7 lg:w-2/3 bg-background/75 rounded-2xl p-8">
                        <img className="h-20 w-20" src="@/components/assets/LogoOnlyCentred.png" alt="Logo"/>
                        <h2 className="text-5xl font-semibold text-foreground md:text-5xl lg:text-8xl">
                            <span>Flowstate</span>
                            <span className="text-foreground"> - letting neurodiversity thrive</span>
                        </h2>
                        <p className="text-base text-foreground md:text-lg lg:text-xl">
                            Your potential is real and we&apos;re just here to help you reach it. With the neurodiverse
                            community, we&apos;re creating a tool that&apos;s finally built for your brain.
                        </p>
                        <div className="flex flex-wrap items-start gap-5 lg:gap-7">
                            <Button asChild className="hover:cursor-pointer">
                                <a onClick={() => setShowModal(true)}>
                                    <div className="flex items-center gap-2">
                                        <ArrowUpRight className="size-4" />
                                    </div>
                                    <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                                        Join the waitlist
                                    </span>
                                </a>
                            </Button>
                            <Button asChild variant="link" className="underline">
                                <a href="/updates">Find out more</a>
                            </Button>
                        </div>
                    </div>
                    {/* <div className="relative z-10">
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
          </div> */}
                </div>
            </div>
            {/* <span></span>
      <div className="bg-background w-full h-screen">
        <h1></h1>

      </div> */}
            <Footer></Footer>
        </section>
    );
}
