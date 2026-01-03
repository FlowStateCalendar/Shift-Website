import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <section className="signup-thank-you">
      <Header/>
      <div className="flex flex-col items-center h-screen">
        <div className="max-w-md gap-2 pb-4">
          <h1 className="text-bold text-center text-3xl mt-8">Thank You!</h1>

          <p className="mt-2 text-lg text-center">You have Successfully joined the waitlist for Shift Habits. Look out for our emails to see what&apos;s new.</p>
        </div>
        <Link href="/">
            <Button className="align-center">Go Home</Button>
        </Link>
      </div>
      <Footer/>
    </section>
  );
};


