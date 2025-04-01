"use client";
import { useContext } from "react";
import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { ThemeContext } from "../../../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { Menubar } from "primereact/menubar";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Components",
          icon: "pi pi-bolt",
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
    },
    {
      label: theme === "light" ? "Light" : "Dark",
      icon: theme === "light" ? "pi pi-moon" : "pi pi-sun",
      command: () => toggleTheme(),
    },
  ];
  const endContent = (
    <Menubar
      model={items}
      style={{ backgroundColor: "transparent", border: "none" }}
    />
  );

  const startContent = (
    <React.Fragment>
      <div className="flex align-items-center gap-2">
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          shape="circle"
        />
        <span className="font-bold text-bluegray-50">Amy Elsner</span>
      </div>
    </React.Fragment>
  );

  return (
    <div className="card">
      <Toolbar
        start={startContent}
        end={endContent}
        className="bg-gray-900 shadow-2"
        style={{
          border: "none",
          borderRadius: "0",
          // backgroundImage:
          //   "linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))",
        }}
      />
    </div>
  );
}
