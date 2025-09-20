import { notFound } from "next/navigation";
import { quizzes } from "@/lib/data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizClient } from "@/components/client/quiz-client";

export default function QuizPage({ params }: { params: { id:string } }) {
    const quiz = quizzes.find((q) => q.id === params.id);

    if (!quiz) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-3xl">
            <QuizClient quiz={quiz} />
        </div>
    );
}
