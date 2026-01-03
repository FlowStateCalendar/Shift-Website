import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
        <Header></Header>
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
        href="/"
        className="text-primary underline hover:text-primary/80 transition"
        >
        Go back home
        </Link>
        <Footer></Footer>
    </section>
  );
}
