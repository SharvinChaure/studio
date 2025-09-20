import {
  BrainCircuit,
  Code,
  FileText,
  Flame,
  Star,
  Target,
} from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { progressData, skills, suggestedPaths } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { MonthlyProgressChart } from "@/components/client/monthly-progress-chart";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Welcome back!
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s a snapshot of your journey from campus to career.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Quizzes Completed
            </CardTitle>
            <BrainCircuit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {progressData.quizzesCompleted}
            </div>
            <p className="text-xs text-muted-foreground">
              +10% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Coding Challenges Solved
            </CardTitle>
            <Code className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {progressData.codingChallengesSolved}
            </div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Resume ATS Score
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {progressData.resumeAtsScore}%
            </div>
            <p className="text-xs text-muted-foreground">
              Top 20% of applicants
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <MonthlyProgressChart />
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Gamification</CardTitle>
              <CardDescription>
                Your stats and unlocked achievements.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-around">
              <div className="flex flex-col items-center gap-1 text-center">
                <div className="flex items-center gap-2">
                  <Flame className="h-6 w-6 text-orange-500" />
                  <span className="text-2xl font-bold">
                    {progressData.streak}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">Day Streak</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <span className="text-2xl font-bold">
                    {progressData.xp.toLocaleString()}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">XP Points</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <div className="relative">
                  <Image
                    src={placeholderImages[0].imageUrl}
                    alt="Current Badge"
                    width={32}
                    height={32}
                    className="rounded-full"
                    data-ai-hint="avatar"
                  />
                </div>
                <span className="mt-2 text-sm text-muted-foreground">
                  {progressData.badges[0]}
                </span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Skill Heatmap</CardTitle>
              <CardDescription>
                Your proficiency across different topics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="py-1 px-3 text-sm"
                    style={{
                      borderColor: `hsl(var(--primary) / ${skill.level / 100})`,
                      backgroundColor: `hsl(var(--primary) / ${
                        skill.level / 100 / 2
                      })`,
                    }}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="font-headline">
                Personalized Learning Path
              </CardTitle>
              <CardDescription>
                AI-powered suggestions to focus your practice based on your
                performance.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestedPaths.map((path, index) => (
            <div key={index}>
              <h4 className="font-semibold">{path.topic}</h4>
              <p className="text-sm text-muted-foreground">{path.reason}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {path.resources.map((resource, rIndex) => (
                  <Button
                    key={rIndex}
                    variant="link"
                    className="h-auto p-0 text-sm"
                  >
                    {resource}
                  </Button>
                ))}
              </div>
              {index < suggestedPaths.length - 1 && (
                <Separator className="my-4" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
