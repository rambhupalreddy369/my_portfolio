"use client";

import { useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import MainContent from "@/components/main-content";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 light:from-slate-50 light:via-white light:to-slate-100 transition-all duration-500">
      Light mode gradient overlay
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-0 dark:opacity-0 light:opacity-100 transition-opacity duration-500" />

      <div className="relative flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 flex flex-col min-h-screen">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <MainContent />
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )} */}
    </div>
  );
}
