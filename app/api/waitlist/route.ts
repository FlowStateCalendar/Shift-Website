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

    const existingEmail = await prisma.waitlist.findUnique({
        where: {
            email: email,
        },
    });
    if (existingEmail) {
        return NextResponse.json({ message: "Email already exists" }, { status: 400 });
    }

    await prisma.waitlist.create({
        data: {
            email: email,
        },
    });

    return NextResponse.json({ message: "Email added to waitlist" }, { status: 200 });
}
