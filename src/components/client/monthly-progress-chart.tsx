"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Bar, BarChart as RechartsBarChart, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "January", quizzes: 186, challenges: 80 },
  { month: "February", quizzes: 305, challenges: 200 },
  { month: "March", quizzes: 237, challenges: 120 },
  { month: "April", quizzes: 73, challenges: 190 },
  { month: "May", quizzes: 209, challenges: 130 },
  { month: "June", quizzes: 214, challenges: 140 },
];

const chartConfig = {
  quizzes: {
    label: "Quizzes",
    color: "hsl(var(--chart-1))",
  },
  challenges: {
    label: "Challenges",
    color: "hsl(var(--chart-2))",
  },
};

export function MonthlyProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Monthly Progress</CardTitle>
        <CardDescription>
          Quizzes and coding challenges completed per month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <RechartsBarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20 }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="quizzes" fill="var(--color-quizzes)" radius={4} />
            <Bar
              dataKey="challenges"
              fill="var(--color-challenges)"
              radius={4}
            />
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
