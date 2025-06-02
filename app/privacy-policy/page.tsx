import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-policy">
      <Header />
      <div className="flex flex-col items-center my-8">
        <div className="max-w-md gap-2">
          <h1 className="text-bold text-center text-3xl mt-8">Privacy Policy</h1>

          <p className="mt-2 text-lg text-center">We take your privacy seriously and are committed to protecting your personal information.</p>

          <h2 className="text-lg underline mt-8 mb-2">What We Collect</h2>
          <ul>
            <li>Name and contact details (such as your email)</li>
            <li>Responses to quizzes and surveys</li>
            <li>Optional demographic or neurodiversity-related information (if shared)</li>
            <li>Technical data</li>
          </ul>

          <h2 className="text-lg underline mt-8 mb-2">How We Use Your Data</h2>
          <ul>
            <li>Personalise your experience with our app and website</li>
            <li>Understand our audience better to shape features and improve our services</li>
            <li>Communicate with you about updates, launches, and opportunities to provide feedback</li>
            <li>Ensure the website and app function effectively and securely</li>
          </ul>

          <h2 className="text-lg underline mt-8 mb-2">Data Storage & Protection</h2>
          <p>
            Your information is stored securely and only accessible to authorised team members. We do not sell your data,
            and we will never share your personal details with third parties without your explicit consent - unless legally
            required to do so.
          </p>

          <h2 className="text-lg underline mt-8 mb-2">Cookies</h2>
          <p>
            We may use cookies and similar technologies to improve your experience on our site. You can manage or disable
            cookies in your browser settings.
          </p>

          <h2 className="text-lg underline mt-8 mb-2">Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Ask us to correct or delete any information we hold about you</li>
            <li>Withdraw your consent at any time</li>
          </ul>
          <p>
            To exercise your rights or ask any questions, contact us at{" "}
            <a href="mailto:flowstatecalendar@gmail.com">flowstatecalendar@gmail.com</a>.
          </p>

          <h2 className="text-lg underline mt-8 mb-2">Updates</h2>
          <p>
            We may update this policy as the app develops or legal requirements change. We&apos;ll notify users of any
            significant updates.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};


