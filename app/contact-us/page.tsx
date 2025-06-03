import Header from "@/components/header";
import { MailIcon, MessageCircle } from "lucide-react";  //MapPinIcon PhoneIcon
import Link from "next/link";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <section>
      <Header></Header>
      <div className="bg-muted-background min-h-screen flex items-center justify-center pt-12 md:pt-16 pb-16">
        <div className="w-full max-w-screen-xl mx-auto px-2 md:px-4 lg:px-2">
          <b className="text-muted-foreground">Contact Us</b>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            We&apos;d love to hear from you
          </h2>
          <p className="mt-4 text-base sm:text-lg">
            Help us shape the future of neurodiversity.
          </p>
          <div className="mt-14 md:mt-24 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
            <div className="bg-secondary text-primary-foreground p-6 pb-10 rounded-lg">
              <div className="h-12 w-12 flex items-center justify-center bg-background text-foreground rounded-full">
                <MailIcon />
              </div>
              <h3 className="mt-8 font-bold text-xl">Email</h3>
              <p className="mt-2.5 mb-4">
                Let us know what you think.
              </p>
              <Link
                className="font-medium"
                href="mailto:flowstatecalendar@gmail.com"
              >
                flowstatecalendar@gmail.com
              </Link>
            </div>
            <div className="bg-primary text-primary-foreground p-6 pb-10 rounded-lg">
              <div className="h-12 w-12 flex items-center justify-center bg-background text-foreground rounded-full">
                <MessageCircle />
              </div>
              <h3 className="mt-8 font-bold text-xl">Live chat</h3>
              <p className="mt-2.5 mb-4">
                Our friendly team is here to help.
              </p>
              <Link className="font-medium" href="#">
                Start new chat (coming Soon)
              </Link>
            </div>

            <div className="bg-accent text-primary-foreground p-6 pb-10 rounded-lg">
              <div className="h-12 w-12 flex items-center justify-center bg-background text-foreground rounded-full">
                <MessageCircle />
              </div>
              <h3 className="mt-8 font-bold text-xl">Discord</h3>
              <p className="mt-2.5 mb-4">
                Come and say hi!
              </p>
              <Link className="font-medium" href="https://discord.gg/BWhRp769Ek" target="_blank" rel="noopener noreferrer">
                Join our server
              </Link>
            </div>

            {/* Phone Number */}

            {/* <div className="bg-foreground/95 text-background p-6 pb-10 rounded-lg">
              <div className="h-12 w-12 flex items-center justify-center bg-background text-foreground rounded-full">
                <PhoneIcon />
              </div>
              <h3 className="mt-8 font-bold text-xl">Phone</h3>
              <p className="mt-2.5 mb-4 text-background/95">
                Everyday from 9am to 5pm.
              </p>
              <Link className="font-medium" href="tel:akashmoradiya3444@gmail.com">
                +44 74156-06756
              </Link>
            </div> */}

            {/* Office Location */}

            {/* <div className="bg-muted p-6 pb-10 rounded-lg">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <MapPinIcon />
              </div>
              <h3 className="mt-8 font-bold text-xl">Office</h3>
              <p className="mt-2.5 mb-4 text-muted-foreground">
                Come say hello at our office HQ.
              </p>
              <Link
                className="font-medium"
                href="https://map.google.com"
                target="_blank"
              >
                100 Smith Street Collingwood <br /> VIC 3066 AU
              </Link>
            </div> */}

            
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};
