import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://shifthabits.co.uk";
    const host = "shifthabits.co.uk";
    
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/thank-you",
                    "/thank-you/",
                    "/signup-thank-you",
                    "/signup-thank-you/",
                    "/quiz",
                    "/quiz/",
                ],
            },
        ],
        host: host,
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}

