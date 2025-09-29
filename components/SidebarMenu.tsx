// components/SidebarMenu.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Briefcase,
  PenTool,
  FileText,
  MessageCircle,
  Sun,
  Moon,
} from "lucide-react";

type SidebarMenuProps = {
  isOpen: boolean;
  closeSidebar: () => void;
};

export default function SidebarMenu({
  isOpen,
  closeSidebar,
}: SidebarMenuProps) {
  const menuItems = [
    { label: "ABOUT", icon: <User size={20} />, href: "/", active: true },
    { label: "PROJECTS", icon: <Briefcase size={20} />, href: "/" },
    { label: "BLOG", icon: <PenTool size={20} />, href: "/" },
    { label: "RESUME", icon: <FileText size={20} />, href: "/" },
    { label: "CONTACT", icon: <MessageCircle size={20} />, href: "/" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Sidebar for desktop */}
      <aside
        className={`hidden md:flex flex-col fixed left-0 top-0 h-full w-52 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 mt-10">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`flex flex-col items-center gap-1 text-sm font-semibold transition ${
                item.active
                  ? "text-red-500"
                  : "text-gray-700 dark:text-gray-200 hover:text-red-400"
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
        <button
          onClick={closeSidebar}
          className="mt-auto mb-6 text-gray-400 hover:text-gray-600"
        >
          <X size={28} />
        </button>
      </aside>

      {/* Footer menu for mobile */}
      <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-inner flex justify-around items-center py-3 md:hidden">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className={`flex flex-col items-center text-xs font-semibold transition ${
              item.active
                ? "text-red-500"
                : "text-gray-700 dark:text-gray-200 hover:text-red-400"
            }`}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </footer>
    </div>
  );
}
