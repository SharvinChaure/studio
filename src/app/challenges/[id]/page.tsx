import { notFound } from "next/navigation";
import { challenges } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const codeStubs = {
    Python: `def solve():\n    # Your code here\n    pass`,
    Java: `class Solution {\n    public void solve() {\n        // Your code here\n    }\n}`,
    "C++": `void solve() {\n    // Your code here\n}`,
}

export default function ChallengePage({ params }: { params: { id: string } }) {
  const challenge = challenges.find((c) => c.id === params.id);

  if (!challenge) {
    notFound();
  }

  return (
    <div className="grid h-[calc(100vh-5rem)] grid-cols-1 gap-6 lg:grid-cols-2">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{challenge.title}</CardTitle>
          <CardDescription>Difficulty: {challenge.difficulty}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 space-y-4 overflow-y-auto">
          <p>{challenge.description}</p>
          <div className="prose prose-sm max-w-none rounded-md bg-muted/50 p-4">
            <h4 className="font-semibold">Example:</h4>
            <pre><code>Input: ...{"\n"}Output: ...</code></pre>
          </div>
          <div className="prose prose-sm max-w-none">
            <h4 className="font-semibold">Constraints:</h4>
            <ul>
              <li><code>nums.length &gt;= 2</code></li>
              <li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <Select defaultValue={challenge.languages[0]}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {challenge.languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button>
                <Play className="mr-2 h-4 w-4" />
                Run Code
            </Button>
        </div>
        <Card className="flex-1">
            <Textarea
            defaultValue={codeStubs[challenge.languages[0] as keyof typeof codeStubs]}
            className="h-full w-full resize-none border-0 bg-background font-mono text-sm focus-visible:ring-0"
            />
        </Card>
         <Card className="h-48">
            <Tabs defaultValue="output">
                <TabsList className="m-2">
                    <TabsTrigger value="output">Output</TabsTrigger>
                    <TabsTrigger value="testcases">Test Cases</TabsTrigger>
                </TabsList>
                 <TabsContent value="output" className="p-4 pt-0">
                    <pre className="text-sm text-muted-foreground">Click "Run Code" to see the output.</pre>
                </TabsContent>
                <TabsContent value="testcases" className="p-4 pt-0">
                    <div className="flex gap-2">
                        <Badge variant="outline" className="border-green-500/50 bg-green-500/10 text-green-700">Passed</Badge>
                        <Badge variant="outline" className="border-green-500/50 bg-green-500/10 text-green-700">Passed</Badge>
                        <Badge variant="outline" className="border-red-500/50 bg-red-500/10 text-red-700">Failed</Badge>
                    </div>
                </TabsContent>
            </Tabs>
        </Card>
      </div>
    </div>
  );
}
