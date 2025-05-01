import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const body = await request.json();
    const existingUser = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });

    if (existingUser) {
        return NextResponse.json({ error: "User with this email already exists." }, { status: 400 });
    }
    return NextResponse.json({ message: "User with this email does not exist." }, { status: 200 });
}
