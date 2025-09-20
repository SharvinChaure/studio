"use client";

import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BrainCircuit,
  Code,
  FileText,
  LayoutDashboard,
  LogOut,
  MessagesSquare,
  Settings,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { placeholderImages } from "@/lib/placeholder-images.json";
import Image from 'next/image';

const navItems = [
  {
    href: "/",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/quizzes",
    icon: BrainCircuit,
    label: "Aptitude Quizzes",
  },
  {
    href: "/challenges",
    icon: Code,
    label: "Coding Challenges",
  },
  {
    href: "/resume-checker",
    icon: FileText,
    label: "Resume Checker",
  },
  {
    href: "/interview-prep",
    icon: Users,
    label: "Interview Prep",
  },
  {
    href: "/community",
    icon: MessagesSquare,
    label: "Community",
  },
  {
    href: "/leaderboard",
    icon: Trophy,
    label: "Leaderboard",
  },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <TargetIcon className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-headline text-lg font-semibold">
              Campus2Career
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={{
                        children: item.label,
                        className: "font-body",
                      }}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={{ children: "Settings", className: "font-body" }}
              >
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
               <Link href="/profile" className="w-full">
                <div className="group/menu-item relative flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm hover:bg-sidebar-accent">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={placeholderImages[0].imageUrl}
                      alt="Sharvin"
                      data-ai-hint="avatar"
                    />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col truncate">
                    <span className="font-medium text-sidebar-foreground">Sharvin</span>
                    <span className="text-xs text-sidebar-foreground/80">
                      sharv@example.com
                    </span>
                  </div>
                  <SidebarMenuButton
                    size="icon"
                    variant="ghost"
                    className={cn(
                      "absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover/menu-item:opacity-100",
                      "group-data-[collapsible=icon]:hidden"
                    )}
                  >
                    <LogOut />
                  </SidebarMenuButton>
                </div>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
               <I8HLogo className="h-10 w-10" />
              <span className="font-semibold">Created by I8H</span>
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

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

function I8HLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="i8h-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00F260', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0575E6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <rect width="200" height="200" rx="30" fill="black" />
      
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fontFamily="'Space Grotesk', sans-serif" 
        fontSize="80" 
        fontWeight="700" 
        fill="url(#i8h-grad)"
        letterSpacing="-5"
      >
        I8H
      </text>
    </svg>
  );
}