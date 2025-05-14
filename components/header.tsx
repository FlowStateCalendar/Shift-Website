"use client";

export default function Header() {
  return (
    <header className="w-full border-b bg-background text-foreground shadow-sm">
      <div className="container mx-auto flex items-center py-4 px-6">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
          F
        </div>
        <span className="ml-3 text-xl font-bold text-foreground">
          Flowstate
        </span>{" "}
      </div>
    </header>
  );
}
