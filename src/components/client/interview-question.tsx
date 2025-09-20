"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  AIGrammarCheckOutput,
  aiGrammarCheck,
} from "@/ai/flows/ai-grammar-check";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2 } from "lucide-react";

export function InterviewQuestion() {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<AIGrammarCheckOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetFeedback = async () => {
    if (!answer.trim()) {
      setError("Please enter an answer before getting feedback.");
      return;
    }
    setError(null);
    setIsLoading(true);
    setFeedback(null);
    try {
      const result = await aiGrammarCheck({ text: answer });
      setFeedback(result);
    } catch (e) {
      setError("Failed to get feedback. Please try again later.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 pt-2">
      <Textarea
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={5}
        className="text-base"
      />
      <Button onClick={handleGetFeedback} disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="mr-2 h-4 w-4" />
        )}
        Get AI Feedback
      </Button>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {feedback && (
        <Alert variant="default" className="bg-accent/50">
          <Wand2 className="h-4 w-4" />
          <AlertTitle className="font-headline">AI Feedback</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none text-foreground">
            {feedback.feedback}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
