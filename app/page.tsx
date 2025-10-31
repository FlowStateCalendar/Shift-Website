/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";
import { Modal } from "@/components/modal";
import Logo from "@/components/assets/AppStoreLogo.png";
import BG from "@/components/assets/bg1.jpg";
import Image from "next/image";

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

//bg-sky-300

export default function Hero() {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <section className="relative overflow-hidden">
            <Header></Header>

            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image src={BG} alt="Background" fill className="object-cover opacity" priority />
            </div>

            {showModal && <Modal onClose={() => setShowModal(false)} />}

            {/* Main Content    */}
            <div className="flex justify-center min-h-screen items-center p-2">
                <div className="container flex flex-col items-center justify-center gap-10 lg:flex-row">
                    <div className="flex flex-col gap-7 lg:w-2/3 bg-background/90 rounded-2xl p-8 z-10">
                        <h2 className="text-5xl font-semibold text-foreground md:text-6xl lg:text-8xl">
                            <span className="flex flex-row justify-between">
                                <div>
                                    <h1>Shift Habits </h1>  
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl">Built for the Neurodiverse</h2>
                                </div>
                                <Image
                                    className="rounded-sm w-20 h-20 md:w-35 md:h-35 lg:w-50 lg:h-50"
                                    src={Logo}
                                    alt="Logo"
                                />
                            </span>
                        </h2>
                        <p className="text-base text-foreground md:text-lg lg:text-xl">
                            Your potential is real and we&apos;re here to help you reach it. Collaborating with the neurodiverse
                            community, we&apos;re creating a tool that&apos;s built for YOUR brain - not everyone else&apos;s.
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
