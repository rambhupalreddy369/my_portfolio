"use client";
import * as React from "react";
import Header from "@/components/Header";
import SidebarMenu from "@/components/SidebarMenu";

function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  console.log(children);
  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />
      <SidebarMenu
        isOpen={isSidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />
      <main>{children}</main>
    </>
  );
}

export default ClientLayout;
