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
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="grad-blue-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4d4dff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#b300b3', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad-red-orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#ff3333', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ff9933', stopOpacity: 1 }} />
        </linearGradient>
        <pattern id="circuit-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 0 5 H 10 M 5 0 V 10" stroke="#80ccff" strokeWidth="0.5" />
          <circle cx="5" cy="5" r="1" fill="#80ccff" />
        </pattern>
      </defs>

      {/* <!-- Background elements --> */}
      <g opacity="0.7">
        <path d="M 50 120 A 50 50 0 0 1 150 120" fill="none" stroke="#ff4d4d" strokeWidth="2" strokeDasharray="5,5" />
        <path d="M 40 100 L 20 90" stroke="#4d4dff" strokeWidth="1" />
        <path d="M 40 110 L 20 110" stroke="#4d4dff" strokeWidth="1" />
        <path d="M 40 120 L 20 130" stroke="#4d4dff" strokeWidth="1" />
      </g>
      
      {/* <!-- Number 8 - Gear and Circuit --> */}
      <g>
        {/* <!-- Gear half (left) --> */}
        <path d="M 100 55 A 25 25 0 1 1 100 105" fill="none" stroke="#333" strokeWidth="12" />
        <g transform="translate(100, 80)">
          {[...Array(8)].map((_, i) => (
             <path key={i} d="M 0 -35 L -5 -40 H 5 L 0 -35" fill="#333" transform={`rotate(${i * 45})`} />
          ))}
        </g>
        <circle cx="100" cy="80" r="28" fill="none" />

        {/* <!-- Circuit half (right) --> */}
        <path d="M 100 55 A 25 25 0 1 0 100 105" fill="url(#circuit-pattern)" stroke="url(#grad-blue-purple)" strokeWidth="4" />
        <path d="M 100 55 A 25 25 0 1 0 100 105" fill="none" stroke="url(#grad-blue-purple)" strokeWidth="4" opacity="0.5"/>
      </g>

      {/* <!-- Skull --> */}
      <g transform="translate(100, 80) scale(0.4)">
        {/* <!-- Skull shape (low-poly) --> */}
        <path d="M 0 -20 L -25 0 L -20 30 L 20 30 L 25 0 Z" fill="url(#grad-blue-purple)" stroke="#cce6ff" strokeWidth="1"/>
        <path d="M 0 -20 L -10 -10 L 0 0 L 10 -10 Z" fill="#99d6ff"/>
        <path d="M -25 0 L -15 10 L 0 0 L -10 -10 Z" fill="#66bfff"/>
        <path d="M 25 0 L 15 10 L 0 0 L 10 -10 Z" fill="#66bfff" />
        <path d="M -20 30 L -10 20 L 10 20 L 20 30 Z" fill="#33a6ff"/>
        <path d="M -5 20 L 0 28 L 5 20 Z" fill="#008ae6"/>
        
        {/* <!-- Teeth --> */}
        <rect x="-12" y="20" width="4" height="6" fill="#ccc"/>
        <rect x="-6" y="20" width="4" height="7" fill="#fff"/>
        <rect x="0" y="20" width="4" height="6" fill="#ccc"/>
        <rect x="6" y="20" width="4" height="7" fill="#fff"/>

        {/* <!-- Goggles --> */}
        <path d="M -30 -5 H 30 V -25 H -30 Z" fill="rgba(20, 20, 50, 0.8)" stroke="#80ccff" strokeWidth="1.5" rx="5"/>
        <text x="-5" y="-12" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#fff">h</text>
        <path d="M -10 -25 V -30 H -20 V -25" fill="none" stroke="#80ccff" strokeWidth="1"/>
        <path d="M 10 -25 V -30 H 20 V -25" fill="none" stroke="#80ccff" strokeWidth="1"/>
      </g>
      
      {/* <!-- Rocket --> */}
      <g transform="translate(125, 40) rotate(-30) scale(0.6)">
        <path d="M 0 -30 L 15 10 L -15 10 Z" fill="#2c3e50" stroke="#3498db" strokeWidth="1.5"/>
        <path d="M 0 -20 C 5 -10, 5 0, 0 10 C -5 0, -5 -10, 0 -20" fill="url(#circuit-pattern)" opacity="0.7"/>
        <circle cx="0" cy="-15" r="5" fill="#3498db" stroke="white" strokeWidth="0.5"/>
        <path d="M -10 10 L -15 20 H -5 Z" fill="#e74c3c"/>
        <path d="M 10 10 L 15 20 H 5 Z" fill="#e74c3c"/>
        <rect x="-5" y="10" width="10" height="10" fill="#f1c40f"/>
        <path d="M -2 20 L -2 25 M 0 20 L 0 25 M 2 20 L 2 25" stroke="#f39c12" strokeWidth="1.5"/>
      </g>
      
      {/* <!-- Text --> */}
      <g transform="translate(0, 150)">
        <text x="25" y="10" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#34495e">
          INN
        </text>
        <g transform="translate(72, 4)">
          <rect x="-7" y="-7" width="14" height="12" rx="2" fill="#555" />
          <path d="M 0 -7 A 5 5 0 0 1 0 -13 H 0 A 5 5 0 0 1 0 -7" fill="none" stroke="#aaa" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="1.5" fill="#aaa"/>
        </g>
        <text x="88" y="10" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#34495e">
          VE
        </text>
        <g transform="translate(130, 10)">
          <path d="M 0 0 H 10 M 0 -5 H 10 M 0 -10 H 10" stroke="#32cd32" strokeWidth="2.5" />
        </g>
        
        <text x="50" y="30" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#2c3e50">
          HACKERS
        </text>
      </g>
    </svg>
  );
}
