import { createContext } from "react";
import useToggleState from "../contexts/hooks/useToggleState";
export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [isDarkMode, handleToggle] = useToggleState(false);
  return (
    <ThemeContext.Provider value={{ isDarkMode, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
