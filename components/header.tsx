"use client";

import Link from "next/link";
import { ModeToggle } from "./theme-mode-toggle";

export default function Header() {
  return (
    <header className="w-full border-b bg-background text-foreground shadow-sm">
      <div className="container mx-auto flex items-center py-4 px-6">
        <Link href="/">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-destructive to-destructive-foreground flex items-center justify-center text-white font-bold text-xl">
            F
          </div>
        </Link>
        
        <span className="ml-3 text-xl font-bold text-foreground inline-flex justify-between w-full items-center">
          <Link href="/">
            Flowstate
          </Link>
          <div className="flex flex-row items-center">
            <Link href="/" className="font-medium text-base m-2 hover:text-muted transition">Home</Link>
            <Link href="/leads" className="font-medium text-base m-2 hover:text-muted transition">Quiz</Link>
            <Link href="/about" className="font-medium text-base m-2 hover:text-muted transition">About</Link>
            <Link href="/updates" className="font-medium text-base m-2 hover:text-muted transition">Updates</Link>
            <Link href="/contact-us" className="font-medium text-base m-2 mr-4 hover:text-muted transition">Contact Us</Link>
            <ModeToggle/>
          </div>
        </span>{" "}
      </div>
    </header>
  );
}
