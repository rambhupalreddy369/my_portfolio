"use client";

import {
  User,
  Briefcase,
  PenTool,
  FileText,
  MessageCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigation = [
    { icon: User, label: "ABOUT", href: "#", active: false },
    { icon: Briefcase, label: "PROJECTS", href: "#", active: true },
    { icon: PenTool, label: "BLOG", href: "#", active: false },
    { icon: FileText, label: "RESUME", href: "#", active: false },
    { icon: MessageCircle, label: "CONTACT", href: "#", active: false },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-20 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 backdrop-blur-md border-r border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/80 transition-all duration-300">
        <nav className="flex-1 flex flex-col items-center py-8 gap-8">
          {navigation.map(({ icon: Icon, label, href, active }) => (
            <a
              key={label}
              href={href}
              className={`group relative flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                active
                  ? "bg-blue-500/20 text-blue-400"
                  : "text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/80"
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-[10px] font-medium tracking-wider">
                {label}
              </span>

              {/* Active indicator */}
              {active && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400 rounded-l-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Close button at bottom for desktop (matches screenshot) */}
        <div className="p-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/80 transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed left-0 top-0 bottom-0 w-64 bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 backdrop-blur-md border-r border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/80 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/80">
          <h2 className="text-lg font-semibold text-white dark:text-white light:text-slate-900">
            Navigation
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/80 transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex flex-col p-4 gap-2">
          {navigation.map(({ icon: Icon, label, href, active }) => (
            <a
              key={label}
              href={href}
              onClick={onClose}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                active
                  ? "bg-blue-500/20 text-blue-400"
                  : "text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/80"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
