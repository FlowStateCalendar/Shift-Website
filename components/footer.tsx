/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { Instagram, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/components/assets/AppStoreLogo.png";

export default function Footer() {
    return (
        <footer className="bg-background text-foreground py-8 border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-10 md:mb-0">
                        <Link href="/" className="flex items-center mb-4">
                            <Image className="rounded-full w-10 h-10" alt="Logo" src={logo}></Image>
                            <span className="ml-3 text-xl font-bold">Shift Habits</span>
                        </Link>
                        <p className="mb-4 max-w-xs">Giving neurodiverse individuals the ability to thrive.</p>
                        <div className="flex space-x-4">
                            {/* <a href="#" className="text-neutral-400 hover:text-white transition" aria-label="Twitter">
                                <Twitter className="h-6 w-6" />
                            </a> */}
                            <a href="#" className="hover:text-accent transition" aria-label="Instagram">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="hover:text-accent transition" aria-label="GitHub">
                                <Github className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/quiz" className="hover:text-accent transition">
                                        Quiz
                                    </Link>
                                </li>
                                {/* <li>
                                    <a href="#" className="hover:text-white transition">
                                        Community
                                    </a>
                                </li> */}
                                <li>
                                    <Link href="/updates" className="hover:text-accent transition">
                                        Updates
                                    </Link>
                                </li>
                                <li>
                                    <a href="/blog" className="hover:text-white transition">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/about" className="hover:text-accent transition">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <a href="/contact-us" className="hover:text-accent transition">
                                        Contact Us
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="#" className="hover:text-white transition">
                                        Join Us
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/privacy-policy" className="hover:text-accent transition">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="terms" className="hover:text-accent transition">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:cursor-pointer hover:text-accent transition" onClick={() => window.dispatchEvent(new Event("openCookieDialog"))}>
                                        Manage Cookies
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-foreground mt-5 pt-5 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Flowstate Thinking. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
