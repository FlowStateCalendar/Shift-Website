import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface POSTBody {
    email: string;
    waitlist: boolean;
}

/**
 * Handles the POST request for setting waitlist to true for a user.
 * @param request - The request object.
 */

export async function POST(request: Request) {
    const body: POSTBody = await request.json();

    //Checks for existing email
    const existingUser = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });

    if (existingUser) {
        return NextResponse.json({ error: "User with this email already exists." }, { status: 400 });
    }

    //Updates waitlist if user exists
    await prisma.user.update({
        where: {
            slug: body.email,
        },
        data: {
            waitlist: true,
        },
    });


    return NextResponse.json({ message: "User added to waitlist successfully."}, { status: 200 });
}