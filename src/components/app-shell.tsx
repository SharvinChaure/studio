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
                    <span className="text-xs text-sidebar-foreground">
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
               <I8HLogo className="h-8 w-8" />
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
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(255,0,255)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(0,255,255)', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(0,0,255)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(255,105,180)', stopOpacity: 1 }} />
        </linearGradient>
        <pattern id="circuit" patternUnits="userSpaceOnUse" width="10" height="10">
          <path d="M0 5L2 5M2 5L2 0M2 5L2 10M2 5L4 5M4 5L5 4M4 5L5 6M8 5L10 5M8 5L8 0M8 5L8 10M8 5L6 5M6 5L5 4M6 5L5 6" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* <!-- 8 shape --> */}
      <path
        d="M60,35 A15,15 0 1,0 60,5 M60,35 A15,15 0 1,1 60,5"
        fill="url(#circuit)"
        stroke="url(#grad1)"
        strokeWidth="2"
      />
      <path
        d="M60,85 A15,15 0 1,0 60,65 M60,85 A15,15 0 1,1 60,65"
        fill="url(#grad2)"
        stroke="url(#grad2)"
        strokeWidth="2"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 60 75"
          to="360 60 75"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      {/* <!-- Gear part of 8 --> */}
      <circle cx="60" cy="75" r="17" fill="none" stroke="url(#grad2)" strokeWidth="4" />
      <g transform="translate(60,75)">
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1="15"
            y1="0"
            x2="20"
            y2="0"
            stroke="url(#grad2)"
            strokeWidth="3"
            transform={`rotate(${i * 45})`}
          />
        ))}
      </g>


      {/* <!-- Skull --> */}
      <g transform="translate(60, 45) scale(0.2)">
        <path d="M-25,10 C-35,-20 35,-20 25,10 L25,30 C25,40 -25,40 -25,30 Z" fill="rgb(200,200,255)" />
        <circle cx="-10" cy="-5" r="5" fill="black" />
        <circle cx="10" cy="-5" r="5" fill="black" />
        <rect x="-5" y="15" width="10" height="5" fill="black" />
        {/* <!-- headset --> */}
        <path d="M-30,-10 C-10,-40 10,-40 30,-10" stroke="red" strokeWidth="4" fill="none" />
        <rect x="-35" y="-15" width="10" height="10" fill="purple" rx="2"/>
        <rect x="25" y="-15" width="10" height="10" fill="purple" rx="2"/>
        <text x="-33" y="-7" fill="white" fontSize="8" fontWeight="bold">h</text>
      </g>
      
      {/* <!-- Rocket --> */}
      <g transform="translate(80, 10) rotate(30)">
        <path d="M0,-15 L5,5 L-5,5 Z" fill="url(#grad1)" />
        <rect x="-3" y="5" width="6" height="5" fill="red" />
        <path d="M-5,10 Q0,15 5,10" stroke="orange" strokeWidth="2" fill="yellow" />
      </g>
      
      {/* <!-- Text --> */}
      <text x="30" y="110" fontFamily="sans-serif" fontSize="14" fill="url(#grad1)" fontWeight="bold">
        INNOV
        <tspan dy="-2" fontSize="12" fill="white">8</tspan>
        <tspan dx="0" dy="0">HACKERS</tspan>
      </text>

      {/* <!-- Padlock Icon --> */}
      <g transform="translate(72, 100) scale(0.1)">
        <rect x="-10" y="0" width="20" height="15" fill="white" rx="2"/>
        <path d="M-15,0 C-15,-15 15,-15 15,0" stroke="white" strokeWidth="3" fill="none"/>
      </g>
    </svg>
  );
}