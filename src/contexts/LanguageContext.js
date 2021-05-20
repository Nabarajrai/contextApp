import React, { createContext, useState } from "react";
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("English");
  const handleToggle = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <LanguageContext.Provider value={{ language, handleToggle }}>
      {children}
    </LanguageContext.Provider>
  );
}
