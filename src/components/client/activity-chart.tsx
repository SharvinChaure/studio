"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const activityData = Array.from({ length: 365 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - 365 + i);
  return {
    date: date.toISOString().split("T")[0],
    count: Math.floor(Math.random() * 5),
  };
});

const getDayOfWeek = (dateString: string) => {
  const date = new Date(dateString);
  return date.getDay();
};

export function ActivityChart() {
  // Pad the start of the data to align the first day to the correct column
  const firstDayOfWeek = getDayOfWeek(activityData[0].date);
  const emptyDays = Array(firstDayOfWeek).fill(null);

  const allDays = [...emptyDays, ...activityData];

  const weeks = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }

  const monthLabels = activityData
    .map((d, i) => {
      if (i === 0 || new Date(d.date).getDate() === 1) {
        return {
          month: new Date(d.date).toLocaleString("default", { month: "short" }),
          weekIndex: Math.floor(i / 7),
        };
      }
      return null;
    })
    .filter(Boolean)
    .reduce((acc, current) => {
        // @ts-ignore
        if (!acc.find(item => item.month === current.month)) {
            // @ts-ignore
            acc.push(current);
        }
        return acc;
    }, []);

  return (
    <TooltipProvider>
      <div className="flex flex-col items-center">
        <div className="flex justify-start w-full gap-4 pl-10 mb-2 text-xs text-muted-foreground">
            {monthLabels.map((label, index) => (
                <div key={index} style={{ transform: `translateX(${(label?.weekIndex || 0) * 16}px)`}} className="absolute">
                    {label?.month}
                </div>
            ))}
        </div>
        <div className="flex gap-1.5">
          <div className="flex flex-col gap-1.5 text-xs text-muted-foreground pr-2">
            <div className="h-3"></div>
            <div className="h-3">Mon</div>
            <div className="h-3"></div>
            <div className="h-3">Wed</div>
            <div className="h-3"></div>
            <div className="h-3">Fri</div>
            <div className="h-3"></div>
          </div>
          <div className="grid grid-flow-col grid-rows-7 gap-1">
            {weeks.flat().map((day, index) =>
              day ? (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        "h-3 w-3 rounded-sm",
                        day.count === 0 && "bg-muted/50",
                        day.count > 0 &&
                          day.count <= 1 &&
                          "bg-primary/20",
                        day.count > 1 &&
                          day.count <= 2 &&
                          "bg-primary/40",
                        day.count > 2 &&
                          day.count <= 3 &&
                          "bg-primary/70",
                        day.count > 3 && "bg-primary"
                      )}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      {day.count} activities on {day.date}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <div key={index} className="h-3 w-3" />
              )
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
