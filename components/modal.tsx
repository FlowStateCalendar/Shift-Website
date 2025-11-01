import { X } from "lucide-react";
import { useEffect } from "react"; // useState
import { Button } from "./ui/button";
// import { toast } from "sonner";

export function Modal({ onClose }: { onClose: () => void }) {
    // const [email, setEmail] = useState("");

    useEffect(() => {
        // Lock scroll on mount
        document.body.style.overflow = "hidden";

        // Restore scroll on unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    function closeModalBgClick(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target instanceof HTMLElement && e.target.id === "modal-bg") {
            onClose();
        }
    }

    function handleSubmit() {
        setTimeout(() => onClose(), 500);
    }

    return (
        <div
            id="modal-bg"
            className="fixed z-50 inset-0 flex flex-col bg-zinc-700/90 backdrop-blur-sm h-dvh w-screen items-center justify-center"
            onClick={closeModalBgClick}
        >
            <div className="flex flex-col bg-background relative rounded-lg p-4 m-4 shadow-2xl">
                <button className="absolute right-5 hover:cursor-pointer" onClick={onClose}>
                    <X />
                </button>
                <div className="flex flex-col items-center m-8 p-4">
                    <h1 className="text-2xl font-bold pb-4">Join the Waitlist</h1>
                    <p className="wrap text-center max-w-md mb-4">
                        Sign up to the waitlist below! We&apos;ll send progress updates and notify you when the app is released.
                    </p>

                    {/* Mailchimp direct form */}
                    <form
                        action="https://app.us17.list-manage.com/subscribe/post?u=9551a10a035942f6b4b9c76b4&id=551ba4d276"
                        method="POST"
                        target="_blank"
                        onSubmit={handleSubmit}
                        className="flex flex-col"
                    >
                        <p className="font-medium">First Name:</p>
                        <input
                            type="text"
                            name="FNAME"
                            placeholder="Jane"
                            required
                            className="rounded-sm text-primary-foreground text-left bg-primary p-1 mb-2"
                        />

                        <p className="font-medium">Last Name:</p>
                        <input
                            type="text"
                            name="LNAME"
                            placeholder="Doe"
                            required
                            className="rounded-sm text-primary-foreground text-left bg-primary p-1 mb-2"
                        />

                        <p className="font-medium">Email:</p>
                        <input
                            type="email"
                            name="EMAIL"
                            placeholder="janedoe@gmail.com"
                            required
                            className="rounded-sm text-primary-foreground text-left bg-primary p-1"
                        />

                        {/* Honeypot - Mailchimp compliance) */}
                        <input
                            type="text"
                            name="b_9551a10a035942f6b4b9c76b4_551ba4d276"
                            tabIndex={-1}
                            autoComplete="off"
                            style={{ position: "absolute", left: "-5000px" }}
                            aria-hidden="true"
                            value=""
                            readOnly
                        />                        <Button
                            type="submit"
                            className="mt-10 px-8 py-7 text-xl font-bold bg-primary hover:bg-primary/90 rounded-full shadow-lg transition transform focus:ring-4 focus:ring-primary/30"
                        >
                            Join the Waitlist
                        </Button>
                    </form>
                    {/* <form className="flex flex-col" onSubmit={handleWaitlist}>
                        <p className="font-medium">Email:</p>
                        <input
                            placeholder="janedoe@gmail.com"
                            required
                            className="lg: rounded-sm text-primary-foreground text-center bg-primary p-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                            type="submit"
                            className="mt-10 px-8 py-7 text-xl font-bold bg-primary hover:bg-primary/90 rounded-full shadow-lg transition transform focus:ring-4 focus:ring-primary/30"
                        >
                            Join the Waitlist
                        </Button>
                    </form> */}
                </div>
            </div>
        </div>
    );
}
