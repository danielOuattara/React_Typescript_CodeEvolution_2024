import { createContext } from "react";
import { theme } from "./theme";

type TypeThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export function ThemeContextProvider({
  children,
}: TypeThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
