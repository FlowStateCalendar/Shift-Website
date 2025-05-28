import { X } from "lucide-react"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

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

        } catch (error) {
            console.error("Submission error:", error);
            // Add toast
        }
    };

    return(
        <div id="modal-bg" className="absolute left-0 top-0 flex flex-col bg-zinc-700/85 background-blur-sm h-dvh w-screen items-center justify-center" onClick={closeModalBgClick}>
            <div className="flex flex-col bg-background relative rounded-lg p-4 m-4 shadow-2xl">
                <button className="absolute right-5 hover:cursor-pointer" onClick={onClose}><X/></button>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold p-8">Join the Waitlist</h1>
                    <form className="flex flex-col" onSubmit={handleWaitlist}>
                        <input 
                            placeholder="janedoe@gmail.com"
                            required
                            className="text-center"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}                         
                        />
                        <Button type="submit" className="mt-8 px-8 py-7 text-xl font-bold bg-primary hover:bg-primary/90 rounded-full shadow-lg transition transform focus:ring-4 focus:ring-primary/30">
                            Join the Waitlist
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}