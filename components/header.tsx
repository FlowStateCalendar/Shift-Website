"use client";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./theme-mode-toggle";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { Modal } from "./modal";

export default function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <header className="w-full border-b bg-background text-foreground shadow-sm">
      {showModal && <Modal onClose={() => setShowModal(false)}/>}
      <div className="container mx-auto flex items-center py-4 px-6">
        <Link href="/">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-background font-bold text-xl">
            F
          </div>
        </Link>
        
        <span className="ml-3 text-xl font-bold text-foreground inline-flex justify-between w-full items-center">
          <div className="">
            <Link href="/">
              Flowstate
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <Link href="/" className="font-medium text-base m-2 hover:text-accent transition">Home</Link>
            <Link href="/leads" className="font-medium text-base m-2 hover:text-accent transition">Quiz</Link>
            <Link href="/about" className="font-medium text-base m-2 hover:text-accent transition">About</Link>
            <Link href="/updates" className="font-medium text-base m-2 hover:text-accent transition">Updates</Link>
            <Link href="/contact-us" className="font-medium text-base m-2 mr-4 hover:text-accent transition">Contact Us</Link>
            <Button asChild className="mr-4 hover:cursor-pointer hover:bg-accent hover:text-white transition">
              <a onClick={() => setShowModal(true)}>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  Waitlist
                </span>
              </a>
            </Button>
            <ModeToggle/>
            
          </div>
        </span>{" "}
      </div>
    </header>
  );
}
