"use client";
// components/Header.tsx
import * as React from "react";
import { Menu, Sun, Moon, X, Github, Linkedin } from "lucide-react";
import { FaXTwitter, FaStackOverflow, FaMedium } from "react-icons/fa6";
import { useTheme } from "next-themes";

type HeaderProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  activeSection: (id: string) => void;
};
export default function Header({
  isSidebarOpen,
  toggleSidebar,
  activeSection,
}: HeaderProps) {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-12 h-6 bg-gray-300 rounded-full" />;
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-gray-900 shadow-sm transition-colors duration-300">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Menu Icon */}
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
        >
          <Menu size={24} />
        </button>

        {/* Dark/Light Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none"
        >
          <div
            className={`w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center transform transition-transform duration-300 ${
              theme === "dark" ? "translate-x-6" : "translate-x-0"
            }`}
          >
            {theme === "dark" ? (
              <Moon size={10} className="text-gray-700" />
            ) : (
              <Sun size={10} className="text-yellow-500" />
            )}
          </div>
        </button>
      </div>

      {/* Center Section - Social Icons */}
      <div className="flex items-center gap-4">
        <SocialIcon
          href="#"
          icon={<FaXTwitter size={18} />}
          tooltip="Twitter"
        />
        <SocialIcon href="#" icon={<Github size={18} />} tooltip={"Github"} />
        <SocialIcon
          href="#"
          icon={<Linkedin size={18} />}
          tooltip={"LinkedIn"}
        />
        <SocialIcon
          href="#"
          icon={<FaStackOverflow size={18} />}
          tooltip={"Stack Overflow"}
        />
        <SocialIcon href="#" icon={<FaMedium size={18} />} tooltip={"Medium"} />
      </div>

      {/* Right Section - Hire Me Button */}
      <a
        onClick={() => activeSection("contact")}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition"
      >
        Hire Me
      </a>
    </header>
  );
}

function SocialIcon({
  href,
  icon,
  tooltip,
}: {
  href: string;
  icon: React.ReactNode;
  tooltip?: string;
}) {
  return (
    <div className="relative group inline-block">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full 
                   bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
                   shadow hover:shadow-md transition"
      >
        {icon}
      </a>

      {/* Tooltip */}
      <span
        className="absolute top-full mb-2 mt-2 left-1/2 -translate-x-1/2 
                   opacity-0 group-hover:opacity-100 
                   bg-gray-800 text-white text-xs rounded-md 
                   px-2 py-1 transition-all duration-300 
                   whitespace-nowrap pointer-events-none"
      >
        {tooltip}
      </span>
    </div>
  );
}
