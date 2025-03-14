import React, { createContext, useState } from "react";

// Create Context
export const ThemeContext = createContext();

// Create Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [position, setPos] = useState("home");

  // Toggle Theme Function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.body.style = "background-color:#050301 ";
    } else {
      document.body.style = "background-color:#f5fffa";
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, position, setPos }}>
      {children}
    </ThemeContext.Provider>
  );
};
