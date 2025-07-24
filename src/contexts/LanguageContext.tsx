import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    "nav.home": "Home",
    "nav.departments": "Departments",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.career": "Career",
    "hero.title": "One App One Citizen",
    "hero.subtitle":
      "Digital Chhattisgarh Initiative - Serving Citizens Through Technology",
    "hero.description":
      "Access all Chhattisgarh government services from a single platform. Empowering citizens with digital governance for a prosperous Chhattisgarh.",
    "departments.title": "Government Departments",
    "departments.subtitle":
      "Explore various Chhattisgarh government departments and their services",
    "schemes.title": "Available Schemes",
    "schemes.subtitle": "Discover Chhattisgarh government schemes and benefits",
    "scheme.description": "Description",
    "scheme.benefits": "Benefits",
    "scheme.eligibility": "Eligibility",
    "scheme.process": "Application Process",
    "button.viewSchemes": "View Schemes",
    "button.applyNow": "Apply Now",
    "button.backToDepartments": "Back to Departments",
    "button.learnMore": "Learn About Chhattisgarh",
  },
  hi: {
    "nav.home": "होम",
    "nav.departments": "विभाग",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क",
    "nav.career": "करियर",
    "hero.title": "वन ऐप वन सिटिजन",
    "hero.subtitle":
      "डिजिटल छत्तीसगढ़ पहल - प्रौद्योगिकी के माध्यम से नागरिकों की सेवा",
    "hero.description":
      "एक ही मंच से सभी छत्तीसगढ़ सरकारी सेवाओं तक पहुंच। समृद्ध छत्तीसगढ़ के लिए डिजिटल गवर्नेंस के साथ नागरिकों को सशक्त बनाना।",
    "departments.title": "सरकारी विभाग",
    "departments.subtitle":
      "विभिन्न छत्तीसगढ़ सरकारी विभागों और उनकी सेवाओं का अन्वेषण करें",
    "schemes.title": "उपलब्ध योजनाएं",
    "schemes.subtitle": "छत्तीसगढ़ सरकारी योजनाओं और लाभों की खोज करें",
    "scheme.description": "विवरण",
    "scheme.benefits": "लाभ",
    "scheme.eligibility": "पात्रता",
    "scheme.process": "आवेदन प्रक्रिया",
    "button.viewSchemes": "योजनाएं देखें",
    "button.applyNow": "अभी आवेदन करें",
    "button.backToDepartments": "विभागों पर वापस जाएं",
    "button.learnMore": "छत्तीसगढ़ के बारे में और जानें",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string, fallback?: string) => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] ||
      fallback ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
