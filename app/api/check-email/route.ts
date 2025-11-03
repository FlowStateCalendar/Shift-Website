import { NextResponse } from "next/server";
import crypto from "crypto";

interface POSTBody {
    email: string;
}

/**
 * Checks if an email exists in Mailchimp list
 * @param request - The request object containing the email
 */
export async function POST(request: Request) {
    try {
        const body: POSTBody = await request.json();
        const { email } = body;

        if (!email || typeof email !== "string") {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }

        const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
        if (!mailchimpApiKey) {
            console.error("MAILCHIMP_API_KEY is not configured");
            return NextResponse.json(
                { error: "Email validation service is not configured" },
                { status: 500 }
            );
        }

        // Mailchimp list details from your form action URL
        const listId = "551ba4d276"; // From your form: u=9551a10a035942f6b4b9c76b4&id=551ba4d276
        const dataCenter = "us17"; // From your form URL: app.us17.list-manage.com

        // Create MD5 hash of lowercase email (Mailchimp requirement)
        const normalizedEmail = email.toLowerCase().trim();
        const subscriberHash = crypto.createHash("md5").update(normalizedEmail).digest("hex");

        // Check if email exists in Mailchimp
        const mailchimpUrl = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`;

        const response = await fetch(mailchimpUrl, {
            method: "GET",
            headers: {
                Authorization: `apikey ${mailchimpApiKey}`,
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            // Email exists in Mailchimp
            const memberData = await response.json();
            return NextResponse.json(
                {
                    exists: true,
                    message: "This email is already registered in our waitlist",
                    status: memberData.status, // subscribed, unsubscribed, cleaned, pending
                },
                { status: 200 }
            );
        } else if (response.status === 404) {
            // Email does not exist in Mailchimp
            return NextResponse.json(
                {
                    exists: false,
                    message: "Email is available",
                },
                { status: 200 }
            );
        } else {
            // Error from Mailchimp API
            const errorData = await response.json().catch(() => ({}));
            console.error("Mailchimp API error:", response.status, errorData);
            return NextResponse.json(
                { error: "Failed to check email. Please try again later." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Error checking email:", error);
        return NextResponse.json(
            { error: "An error occurred while checking the email" },
            { status: 500 }
        );
    }
}

