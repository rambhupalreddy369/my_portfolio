"use client";

import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Button } from "primereact/button";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="p-3 flex justify-between align-items-center bg-primary text-white">
      <h2>My Portfolio</h2>
      <Button
        icon={theme === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleTheme}
        className="p-button-rounded p-button-secondary"
      />
    </nav>
  );
};
export default Navbar;
