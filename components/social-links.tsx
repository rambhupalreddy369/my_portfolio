"use client";

import { Github, Linkedin, Twitter, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialLinks() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Video, href: "#", label: "Video Call" },
  ];

  return (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Button
          key={label}
          variant="ghost"
          size="sm"
          asChild
          className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/80 transition-colors duration-200"
        >
          <a href={href} aria-label={label}>
            <Icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );
}
