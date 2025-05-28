import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-policy">
      <Header/>
      <div className="flex flex-col items-center h-screen">
        <div className="max-w-md gap-2">
          <h1>Terms of Service</h1>

          <p>We are developing the app as you read this, make sure to check back here once it&apos;s live.</p>
        </div>
      </div>
      <Footer/>
    </section>
  );
};


