import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface POSTBody {
    email: string;
    firstName: string;
    lastName: string;
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
    try {
        const body: POSTBody = await request.json();

        // Validate required fields
        if (!body.email || !body.firstName || !body.lastName) {
            return NextResponse.json(
                { error: "Email, first name, and last name are required." },
                { status: 400 }
            );
        }

        if (!body.quiz || !Array.isArray(body.quiz) || body.quiz.length === 0) {
            return NextResponse.json({ error: "Quiz data is required." }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: body.email,
            },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User with this email already exists." },
                { status: 400 }
            );
        }

        // Combine firstName and lastName for database name field (maintain backward compatibility)
        const fullName = `${body.firstName} ${body.lastName}`;

        // Create user and quiz data
        await prisma.user.create({
            data: {
                email: body.email,
                name: fullName,
                quiz: {
                    create: body.quiz.map((question) => ({
                        question: question.question,
                        answer: question.answer,
                    })),
                },
            },
        });

        // Calculate score
        const score = body.quiz.reduce((acc, question) => {
            if (!isNaN(Number(question.answer))) {
                return acc + Number(question.answer);
            }
            return acc;
        }, 0);

        return NextResponse.json(
            {
                message: "User and quiz data created successfully.",
                score,
                email: body.email,
                firstName: body.firstName,
                lastName: body.lastName,
            },
            { status: 200 }
        );
    } catch (error: unknown) {
        console.error("Error submitting quiz:", error);

        // Handle Prisma errors
        if (error && typeof error === "object" && "code" in error) {
            const prismaError = error as { code?: string; meta?: unknown };
            if (prismaError.code === "P2002") {
                return NextResponse.json(
                    { error: "User with this email already exists." },
                    { status: 400 }
                );
            }
        }

        // Generic error response
        return NextResponse.json(
            { error: "An error occurred while saving your quiz. Please try again." },
            { status: 500 }
        );
    }
}
