import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hrInterviewQuestions } from "@/lib/data";
import { InterviewQuestion } from "@/components/client/interview-question";

export default function InterviewPrepPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          HR Interview Prep
        </h1>
        <p className="text-muted-foreground">
          Practice common HR questions and get instant AI feedback.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Practice Questions</CardTitle>
          <CardDescription>
            Craft your answers and use the AI checker to refine them for
            clarity and impact.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {hrInterviewQuestions.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <InterviewQuestion />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
