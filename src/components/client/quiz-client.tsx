"use client";

import { useState, useEffect } from "react";
import type { quizzes } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Clock, CheckCircle, XCircle } from "lucide-react";

type Quiz = (typeof quizzes)[0];

export function QuizClient({ quiz }: { quiz: Quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isFinished]);

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleSelectOption = (questionId: number, option: string) => {
    setAnswers({ ...answers, [questionId]: option });
  };
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  if (isFinished) {
    // Dummy score calculation
    const score = Object.keys(answers).length;
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Quiz Completed!</CardTitle>
                <CardDescription>You have completed the {quiz.title}.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-4 text-center">
                <p className="text-muted-foreground">Your Score:</p>
                <p className="text-6xl font-bold">{score} <span className="text-2xl text-muted-foreground">/ {quiz.questions.length}</span></p>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
            </CardContent>
        </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-headline">{quiz.title}</CardTitle>
          <div className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium">
            <Clock className="h-4 w-4" />
            <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
          </div>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
          <CardDescription className="pt-4 text-lg text-foreground">{currentQuestion.text}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            onValueChange={(value) => handleSelectOption(currentQuestion.id, value)}
            value={answers[currentQuestion.id] || ""}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => (
              <Label key={index} className="flex items-center gap-3 rounded-md border p-4 hover:bg-accent has-[input:checked]:border-primary has-[input:checked]:bg-primary/5">
                <RadioGroupItem value={option} id={`q${currentQuestion.id}-o${index}`} />
                <span>{option}</span>
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
            <Progress value={progress} />
            <Button onClick={handleNext} className="self-end">
            {currentQuestionIndex < quiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
