import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { skills, progressData } from "@/lib/data";
import { ActivityChart } from "@/components/client/activity-chart";
import { Star } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
        <Avatar className="h-24 w-24 border-4 border-primary/50">
          <AvatarImage
            src={placeholderImages[0].imageUrl}
            alt="Sharvin"
            data-ai-hint="avatar"
          />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <h1 className="font-headline text-3xl font-bold">Sharvin</h1>
          <p className="text-muted-foreground">sharv@example.com</p>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="text-lg font-bold">{progressData.xp.toLocaleString()} XP</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Weekly Activity</CardTitle>
                    <CardDescription>Your engagement over the last year.</CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <ActivityChart />
                </CardContent>
            </Card>
        </div>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Skills</CardTitle>
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
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {progressData.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="py-1 px-3 text-sm">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
