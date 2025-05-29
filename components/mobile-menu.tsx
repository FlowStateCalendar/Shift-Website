import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./theme-mode-toggle";

export function MobileMenu() {
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline"><AlignJustify/></Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="flex flex-col"> 
                    <Link href="/" className="font-medium text-base m-2 hover:text-accent transition">Home</Link>
                    <Link href="/leads" className="font-medium text-base m-2 hover:text-accent transition">Quiz</Link>
                    <Link href="/about" className="font-medium text-base m-2 hover:text-accent transition">About</Link>
                    <Link href="/updates" className="font-medium text-base m-2 hover:text-accent transition">Updates</Link>
                    <Link href="/contact-us" className="font-medium text-base m-2 mr-4 hover:text-accent transition">Contact Us</Link>
                    <ModeToggle/>
                </div>
            </SheetContent>
        </Sheet> 
    )
}
