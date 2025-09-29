// components/SidebarMenu.tsx
"use client";
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
import * as React from "react";

type SidebarMenuProps = {
  isOpen: boolean;
  closeSidebar: () => void;
  activeSection: (id: string) => void;
};

export default function SidebarMenu({
  isOpen,
  closeSidebar,
  activeSection,
}: SidebarMenuProps) {
  const menuItems = [
    {
      id: "about",
      label: "ABOUT",
      icon: <User size={20} />,
      active: true,
    },
    {
      id: "projects",
      label: "PROJECTS",
      icon: <Briefcase size={20} />,
    },
    { id: "blog", label: "BLOG", icon: <PenTool size={20} /> },
    { id: "resume", label: "RESUME", icon: <FileText size={20} /> },
    {
      id: "contact",
      label: "CONTACT",
      icon: <MessageCircle size={20} />,
    },
  ];
  const [activeId, setActiveId] = React.useState("about");
  const handleClick = (id: string) => {
    setActiveId(id);
    activeSection(id);
  };
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Sidebar for desktop */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        />
      )} */}
      <div
        className={`fixed z-50 top-1/2 transform -translate-y-1/2 ml-5 bg-white transition-all duration-300 dark:bg-gray-900 
          dark:text-gray-100 ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <button
          onClick={closeSidebar}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <X size={22} />
        </button>

        <nav className="flex flex-col items-center gap-6 p-8">
          {menuItems.map((item, id) => (
            <button
              key={id}
              onClick={() => handleClick(item.id)}
              className={`flex flex-col items-center gap-1 text-sm font-semibold transition ${
                activeId === item.id
                  ? "text-red-500"
                  : "text-gray-700 dark:text-gray-200 hover:text-red-400"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Footer menu for mobile */}
      <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-inner flex justify-around items-center py-3 md:hidden">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            onClick={() => handleClick(item.id)}
            className={`flex flex-col items-center text-xs font-semibold transition ${
              activeId === item.id
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
