import React, { createContext, useState } from "react";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguageContext = () => {
  const languageState = React.useContext(LanguageContext);

  if (typeof languageState === "undefined") {
    throw new Error("useLanguageContext must be used within a LanguageProvider");
  }

  return languageState;
};

export { LanguageProvider, useLanguageContext };
