"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock, LogIn } from "lucide-react";

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export default function LoginPage() {
  const [username, setUsername] = useState("Sharvin");
  const [password, setPassword] = useState("1111");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (username === "Sharvin" && password === "1111") {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/40">
      <Card className="w-full max-w-sm shadow-2xl">
        <form onSubmit={handleLogin}>
          <CardHeader className="text-center">
            <div className="mb-4 flex flex-col items-center justify-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <TargetIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h1 className="font-headline text-2xl font-bold">Campus2Career</h1>
            </div>
            <CardTitle className="font-headline text-3xl">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to continue your journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="username"
                  type="text"
                  placeholder="sharvin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" type="submit">
              <LogIn className="mr-2" />
              Login
            </Button>
            <Button variant="link" size="sm" className="text-muted-foreground">
              Forgot password?
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
