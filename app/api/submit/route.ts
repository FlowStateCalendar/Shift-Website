import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface POSTBody {
    email: string;
    name: string;
    quiz: {
        question: string;
        answer: string;
    }[];
}

/**
 * Handles the POST request for creating a new user and their quiz data.
 * @param request - The request object.
 */
export async function POST(request: Request) {
    const body: POSTBody = await request.json();
    const existingUser = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });

    if (existingUser) {
        return NextResponse.json({ error: "User with this email already exists." }, { status: 400 });
    }

    await prisma.user.create({
        data: {
            email: body.email,
            name: body.name,
            quiz: {
                create: body.quiz.map((question) => ({
                    question: question.question,
                    answer: question.answer,
                })),
            },
        },
    });

    // calculate score
    const score = body.quiz.reduce((acc, question) => {
        if (!isNaN(Number(question.answer))) {
            return acc + Number(question.answer);
        }
        return acc;
    }, 0);

    return NextResponse.json({ message: "User and quiz data created successfully.", score }, { status: 200 });
}
