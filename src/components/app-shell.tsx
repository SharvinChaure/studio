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
                  <SidebarMenuButton
                    as={Link}
                    href={item.href}
                    isActive={isActive}
                    tooltip={{
                      children: item.label,
                      className: "font-body",
                    }}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
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
              <div className="group/menu-item relative flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={placeholderImages[0].imageUrl}
                    alt="Alex"
                    data-ai-hint="avatar"
                  />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="flex flex-col truncate">
                  <span className="font-medium">Alex Marshall</span>
                  <span className="text-xs text-muted-foreground">
                    alex.m@example.com
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
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
            {/* Can add breadcrumbs or page title here */}
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
