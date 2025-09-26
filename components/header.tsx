"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import SocialLinks from "@/components/social-links";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/80 backdrop-blur-md bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/80 transition-all duration-300">
      <div className="flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Left: Menu + Theme Toggle */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/80 transition-colors duration-200"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex-1 flex justify-center">
          <SocialLinks />
        </div>

        {/* Right: Hire Me Button + Mobile Theme Toggle */}
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
          <Button className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-lg">
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
}
