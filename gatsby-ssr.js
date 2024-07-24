import React from "react";
import { ThemeProvider } from "./src/contexts/theme-context";
import { LanguageProvider } from "./src/contexts/language-context";
import "./src/styles/global.scss";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <LanguageProvider>
      {element}
    </LanguageProvider>
  </ThemeProvider>
);
