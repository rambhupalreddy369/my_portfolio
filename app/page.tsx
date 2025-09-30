"use client";

import { useState } from "react";
import SidebarMenu from "@/components/SidebarMenu";
import Header from "@/components/Header";
import About from "@/components/MainSection/About";
import Projects from "@/components/MainSection/Projects";
import BlogPosts from "@/components/MainSection/BlogPosts";
// import Resume from "@/components/MainSection/Resume";
import Contact from "@/components/MainSection/Contact";
import Home from "@/components/Resume/Resume";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    console.log(activeSection);
    switch (activeSection) {
      case "about":
        return <About></About>;

      case "projects":
        return <Projects></Projects>;

      case "blog":
        return <BlogPosts></BlogPosts>;

      case "resume":
        return <Home></Home>;

      case "contact":
        return <Contact></Contact>;

      default:
        return null;
    }
  };
  const handleChildAction = (value: string) => {
    setActiveSection(value);
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen((prev) => !prev)}
        activeSection={handleChildAction}
      ></Header>
      <div className="flex">
        <SidebarMenu
          isOpen={isSidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
          activeSection={handleChildAction}
        ></SidebarMenu>
        {/* Main Content */}
        <div className="flex-1">
          {/* Page Content */}
          <main className="p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">{renderContent()}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
