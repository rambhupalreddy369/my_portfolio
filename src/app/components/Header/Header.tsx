"use client";
import { useContext } from "react";
import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { ThemeContext } from "../../../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const endContent = (
    <div className="flex flex-wrap align-items-center gap-3">
      <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
        <i className="pi pi-home text-2xl"></i>
      </button>
      <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
        <i className="pi pi-user text-2xl"></i>
      </button>
      <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
        <i className="pi pi-search text-2xl"></i>
      </button>
      <button
        className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <i className=" text-2xl">
            <FaMoon />
          </i>
        ) : (
          <i className=" text-2xl">
            {" "}
            <FaSun />
          </i>
        )}
      </button>
      {/* <Button
        icon={theme === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleTheme}
        className="p-button-rounded p-button-secondary"
      /> */}
    </div>
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
