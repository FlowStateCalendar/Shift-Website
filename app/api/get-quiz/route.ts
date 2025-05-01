import fs from "fs";

export async function GET() {
    const filePath = "./app/api/get-quiz/quiz-questions.json"; // Update this to your file path
    const data = await fs.promises.readFile(filePath, "utf8");
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
