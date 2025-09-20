import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { communityPosts } from "@/lib/data";
import { ArrowBigDown, ArrowBigUp, MessageCircle, PlusCircle } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CommunityPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Community Forum
          </h1>
          <p className="text-muted-foreground">
            Ask questions, share knowledge, and connect with peers.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {communityPosts.map((post) => (
          <Card key={post.id} className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center bg-muted/50 p-4 md:w-20 md:flex-col md:p-2">
              <Button variant="ghost" size="icon">
                <ArrowBigUp className="h-5 w-5" />
              </Button>
              <span className="min-w-6 text-center font-bold">{post.votes}</span>
              <Button variant="ghost" size="icon">
                <ArrowBigDown className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1">
              <CardHeader>
                <Link href="#" className="hover:underline">
                  <CardTitle className="font-headline text-lg">
                    {post.title}
                  </CardTitle>
                </Link>
                <CardDescription className="flex items-center gap-2 text-xs">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={post.author.avatarUrl} alt={post.author.name} data-ai-hint="avatar" />
                    <AvatarFallback>
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>
                    Posted by {post.author.name} {post.timestamp}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.content}
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments} comments</span>
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
