import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { challenges } from "@/lib/data";
import { Code, Signal, SignalHigh, SignalLow, SignalMedium } from "lucide-react";
import Link from "next/link";

const difficultyIcons = {
  Easy: <SignalLow className="mr-2 h-4 w-4 text-green-500" />,
  Medium: <SignalMedium className="mr-2 h-4 w-4 text-yellow-500" />,
  Hard: <SignalHigh className="mr-2 h-4 w-4 text-red-500" />,
};

const difficultyColors = {
    Easy: "border-green-500/50 bg-green-500/10",
    Medium: "border-yellow-500/50 bg-yellow-500/10",
    Hard: "border-red-500/50 bg-red-500/10",
}

export default function ChallengesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Coding Challenges
        </h1>
        <p className="text-muted-foreground">
          Sharpen your problem-solving skills with our coding challenges.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="font-headline">{challenge.title}</CardTitle>
                <Badge variant="outline" className={difficultyColors[challenge.difficulty as keyof typeof difficultyColors]}>
                  {difficultyIcons[challenge.difficulty as keyof typeof difficultyIcons]}
                  {challenge.difficulty}
                </Badge>
              </div>
              <CardDescription>{challenge.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code className="h-4 w-4" />
                <div className="flex gap-1.5">
                    {challenge.languages.map((lang) => (
                        <Badge key={lang} variant="secondary">{lang}</Badge>
                    ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/challenges/${challenge.id}`}>Start Challenge</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
