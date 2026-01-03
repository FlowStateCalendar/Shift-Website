import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface POSTBody {
    email: string;
}

/**
 * Handles the POST request for adding an email to the waitlist.
 * @param request - The request object.
 */
export async function POST(request: Request) {
    const body: POSTBody = await request.json();
    const { email } = body;

    // Normalize email to lowercase to avoid case-sensitive duplicates
    const normalizedEmail = email.toLowerCase();

    try {
        // Check if the email already exists in the waitlist
        const existingEmail = await prisma.waitlist.findUnique({
            where: {
                email: normalizedEmail,
            },
        });

        if (existingEmail) {
            return NextResponse.json({ message: "Email already exists" }, { status: 400 });
        }

        // Add the email to the waitlist
        await prisma.waitlist.create({
            data: {
                email: normalizedEmail,
            },
        });

        return NextResponse.json({ message: "Email added to waitlist" }, { status: 200 });
    } catch (error: unknown) {
        // Handle unique constraint violation (Prisma error code P2002)
        if (
            (error as { code?: string; meta?: { target?: string[] } }).code === "P2002" &&
            (error as { meta?: { target?: string[] } }).meta?.target?.includes("email")
        ) {
            return NextResponse.json({ message: "Email already exists" }, { status: 400 });
        }

        // Handle other errors
        console.error("Error adding email to waitlist:", error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
