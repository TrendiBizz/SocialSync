"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Import cn

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    // Use background/foreground from config
    <div className={cn("min-h-screen flex flex-col bg-background text-foreground")}>
      {/* Use card/border/card-foreground from config */}
      <header className={cn("bg-card shadow border-b border-border p-4")}>
        <h1 className="text-2xl font-bold text-card-foreground">SocialSync Dashboard</h1>
      </header>
      <main className="flex-1 p-6">{children}</main>
       {/* Use card/border/muted-foreground from config */}
      <footer className={cn("bg-card shadow p-4 text-center text-sm border-t border-border text-muted-foreground")}>
        © {new Date().getFullYear()} SocialSync. All rights reserved.
      </footer>
    </div>
  );
}