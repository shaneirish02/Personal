import React, { createContext, useState, useContext } from "react";
import { Appearance } from "react-native";

// Create the Theme Context
const ThemeContext = createContext();

// Define light and dark theme colors
export const themes = {
  light: {
    background: "#f9f9f9",
    text: "#000",
    button: "#447AC4",
    buttonText: "#fff",
  },
  dark: {
    background: "#000",
    text: "#fff",
    button: "#447AC4",
    buttonText: "#fff",
  },
};

// Create a custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Determine the default theme based on the system setting
  const systemTheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(
    systemTheme === "dark" ? themes.dark : themes.light
  );

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
