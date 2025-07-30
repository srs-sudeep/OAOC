import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

const CareerCard = () => {
  const { language } = useLanguage();

  return (
    <>
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="text-center mb-6 animate-fade-in ">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            {language === "en" ? "Career Opportunities" : "करियर के अवसर"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "en"
              ? "Explore a wide range of career options based on your education, interests, and future goals."
              : "अपनी शिक्षा, रुचियों और भविष्य के लक्ष्यों के अनुसार विभिन्न करियर विकल्पों को जानें।"}
          </p>
        </div>
      </div>
    </>
  );
};

export default CareerCard;
