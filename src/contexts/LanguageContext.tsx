import React, { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={language === "en" ? "" : "dir-rtl"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};