import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Toaster } from "sonner";
import { headers } from "next/headers";
import { CookieConsent } from "@/components/CookieConsent";
// import Script from "next/script";
import Cookies from "js-cookie";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const baseUrl = "https://shifthabits.co.uk";

export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers();
    const pathname = headersList.get("x-pathname") || "/";
    
    // Ensure pathname starts with / and remove trailing slash (except for root)
    let cleanPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
    if (cleanPathname !== "/" && cleanPathname.endsWith("/")) {
        cleanPathname = cleanPathname.slice(0, -1);
    }
    
    // Construct the full canonical URL (canonical URLs should not include query parameters)
    const canonicalUrl = `${baseUrl}${cleanPathname}`;

    return {
        title: "Shift Habits",
        description: "A Gamified Calendar built for the neurodiverse",
        alternates: {
            canonical: canonicalUrl,
        },
        icons: {
            icon: "/favicon.ico",
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const consent = Cookies.get("shiftHabitsConsent");
    const hasAnalyticsConsent = consent ? JSON.parse(consent).analytics : false;
    console.log(hasAnalyticsConsent);

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/* defaultTheme can be light/dark/system - system sets to users default theme */}
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                    <CookieConsent />
                    <Toaster richColors/>
                </ThemeProvider>
                {/* Conditionally load Google Analytics if consent given */}
                {/* {hasAnalyticsConsent && (
                <>
                    <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
                    <Script id="ga-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-XXXXXXX', { anonymize_ip: true });
                    `}
                    </Script>
                </>
                )} */}
            </body>
        </html>
    );
}
