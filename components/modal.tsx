import { X } from "lucide-react"
import { useEffect } from "react";
//import { useRef } from "react";

export function Modal({ onClose }: { onClose: () => void }) {
        
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

    return(
        <div id="modal-bg" className="absolute left-0 top-0 flex flex-col bg-zinc-700/85 background-blur-sm h-dvh w-screen items-center justify-center" onClick={closeModalBgClick}>
            <div className="flex flex-col bg-background relative rounded-lg p-4 m-4 shadow-2xl">
                <button className="absolute right-5" onClick={onClose}><X/></button>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold p-8">Join the Waitlist</h1>
                    <form className="flex flex-col" action="">
                        <input 
                            type="text"
                            placeholder="Jane Doe"
                            required
                            className=""
                        />
                        <input 
                            type="email"
                            placeholder="janedoe@gmail.com"
                            required
                            className=""
                        />
                        <button
                            type="submit"
                            className="text-xl mt-5"
                        >
                            Join Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}