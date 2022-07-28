import { createContext } from "react";
export const themeContext = createContext(
  {} as { theme: string; toggleTheme: () => void }
);
