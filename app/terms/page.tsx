import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-policy">
      <Header/>
      <div className="flex flex-col items-center h-screen">
        <div className="max-w-md gap-2">
          <h1 className="text-bold text-center text-3xl mt-8">Terms of Service</h1>

          <p className="mt-2 text-lg text-center">We are developing the app as you read this, check back here once it&apos;s live.</p>
        </div>
      </div>
      <Footer/>
    </section>
  );
};


