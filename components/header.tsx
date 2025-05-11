import { ModeToggle } from "./theme-mode-toggle";

export default function Header() {
    return (
        <header className="bg-card/70 backdrop-blur-sm shadow-sm py-4 sticky top-0 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                            F
                        </div>
                        <span className="ml-3 text-xl font-bold text-foreground">Flowstate</span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
