import { X } from "lucide-react"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function Modal({ onClose }: { onClose: () => void }) {
        
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Lock scroll on mount
        document.body.style.overflow = "hidden";

        // Restore scroll on unmount
        return () => {
        document.body.style.overflow = "";
        };
    }, []);

    function closeModalBgClick(e: React.MouseEvent<HTMLDivElement>) {
        if(e.target instanceof HTMLElement && e.target.id === "modal-bg") {
            onClose();
        }
    }

        const handleWaitlist = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                }),
            });

            if (!res.ok) throw new Error("Failed to join waitlist");

            console.log("Successfully added!");
    
            // Add toast
            onClose();
            toast("✓ Successfully added to the waitlist!");

        } catch (error) {
            console.error("Submission error:", error);
            // Add toast
            toast("X Make sure to use a valid email which hasn't already been registered.");
        }
    };

    return(
        <div id="modal-bg" className="fixed z-50 inset-0 flex flex-col bg-zinc-700/90 backdrop-blur-sm h-dvh w-screen items-center justify-center" onClick={closeModalBgClick}>
            <div className="flex flex-col bg-background relative rounded-lg p-4 m-4 shadow-2xl">
                <button className="absolute right-5 hover:cursor-pointer" onClick={onClose}><X/></button>
                <div className="flex flex-col items-center m-8 p-4">
                    <h1 className="text-2xl font-bold pb-4">Join the Waitlist</h1>
                    <p className="wrap text-center max-w-md mb-4">
                        Sign up to the waitlist below! 
                        We will send you progress updates 
                        and you will be the first to know when the app is released.
                    </p>
                    <form className="flex flex-col" onSubmit={handleWaitlist}>
                        <p className="font-medium">Email:</p>
                        <input 
                            placeholder="janedoe@gmail.com"
                            required
                            className="lg: rounded-sm text-primary-foreground text-center bg-primary p-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}                         
                        />
                        <Button type="submit" className="mt-10 px-8 py-7 text-xl font-bold bg-primary hover:bg-primary/90 rounded-full shadow-lg transition transform focus:ring-4 focus:ring-primary/30">
                            Join the Waitlist
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}