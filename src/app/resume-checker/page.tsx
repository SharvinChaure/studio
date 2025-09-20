import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { Separator } from "@/components/ui/separator";
import { UploadCloud } from "lucide-react";

const atsKeywords = [
  "Java", "Python", "Data Structures", "Algorithms", "React", "Node.js",
  "SQL", "Git", "Agile", "Problem Solving", "Teamwork", "Communication"
];

export default function ResumeCheckerPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Resume ATS Checker
        </h1>
        <p className="text-muted-foreground">
          Optimize your resume to pass through Applicant Tracking Systems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Upload Resume</CardTitle>
              <CardDescription>
                Upload your resume in PDF or DOCX format to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resume-file">Resume File</Label>
                <Input id="resume-file" type="file" />
              </div>
              <Button className="w-full">
                <UploadCloud className="mr-2 h-4 w-4" />
                Analyze Resume
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Analysis Results</CardTitle>
              <CardDescription>
                Here is a summary of your resume&apos;s ATS compatibility.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-background p-6">
                <h3 className="text-center font-semibold">
                  Compatibility Score
                </h3>
                <ProgressCircle value={88} size={120} strokeWidth={10} />
                <p className="text-center text-sm text-muted-foreground">
                  Your resume is well-optimized and likely to pass through most
                  ATS filters.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Keyword Match</h3>
                  <p className="text-sm text-muted-foreground">
                    Keywords found in your resume that match common job
                    requirements.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {atsKeywords.slice(0, 6).map((keyword) => (
                      <Badge key={keyword} variant="default" className="bg-green-600/80 hover:bg-green-600">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold">Suggested Keywords</h3>
                  <p className="text-sm text-muted-foreground">
                    Consider adding these keywords to improve your score.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {atsKeywords.slice(6).map((keyword) => (
                      <Badge key={keyword} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
