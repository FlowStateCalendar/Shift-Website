import { Twitter, Instagram, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-neutral-300 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-10 md:mb-0">
                        <div className="flex items-center mb-4">
                            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                                F
                            </div>
                            <span className="ml-3 text-xl font-bold text-white">Flowstate</span>
                        </div>
                        <p className="mb-4 max-w-xs">
                            Supporting neurodiverse individuals through technology.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-neutral-400 hover:text-white transition" aria-label="Twitter">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-white transition" aria-label="Instagram">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-white transition" aria-label="GitHub">
                                <Github className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="hover:text-white transition">
                                        Quiz
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Updates
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/about" className="hover:text-white transition">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <a href="/contact-us" className="hover:text-white transition">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Join Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-10 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Flowstate Calendar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
